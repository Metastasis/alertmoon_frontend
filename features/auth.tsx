import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
} from 'react';
import {Configuration, V0alpha2Api, Session, Identity} from '@ory/client';
import {edgeConfig} from '@ory/integrations/next';
import {useRouter} from 'next/router';

interface AuthType {
  session: Session | undefined;
  logoutUrl: string | undefined;
  userName: string | undefined;
}

const AuthContext = createContext<AuthType>({
  session: undefined,
  logoutUrl: undefined,
  userName: undefined,
});

// TODO: fix cors
const ory = new V0alpha2Api(new Configuration(edgeConfig));

export const AuthProvider: React.FC = ({children}) => {
  const router = useRouter();
  const [session, setSession] = useState<Session | undefined>();
  const [logoutUrl, setLogoutUrl] = useState<string | undefined>();
  const authValue = useMemo(
    () => ({
      session,
      logoutUrl,
      userName: session?.identity ? getUserName(session.identity) : undefined,
    }),
    [session, logoutUrl],
  );
  useEffect(() => {
    ory
      .toSession()
      .then(({data}) => {
        // User has a session!
        setSession(data);
        // Create a logout url
        ory.createSelfServiceLogoutFlowUrlForBrowsers().then(({data}) => {
          setLogoutUrl(data.logout_url);
          router.push('/app');
        });
      })
      .catch(() => {
        // Redirect to login page
        // return router.push(edgeConfig.basePath + '/ui/login');
        return window.open('http://127.0.0.1:4455/login');
      });
  }, []);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

// Returns either the email or the username depending on the user's Identity Schema
const getUserName = (identity: Identity) =>
  identity.traits.email || identity.traits.username;
