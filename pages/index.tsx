import {useCallback} from 'react';
import Link from 'next/link';
import {useAuth} from '../features/auth';
import styles from '../styles/Home.module.css';


const Home = () => {
  const auth = useAuth();
  if (!auth.session) return null;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js, {auth.userName}!</a>
        </h1>

        <p className={styles.description}>
          <Link href="/app">К приложению</Link>
        </p>

        <p className={styles.description}>
          <a href={auth.logoutUrl}>Log out</a>
        </p>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <SubscriberButton />
        <SearchButton />
        <SmsLogButton />
        <SmsSearchButton />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

function SubscriberButton() {
  const handleSubscribe = useCallback(() => {
    subscribeDevice({
      mobileNumber: '79991002030',
    });
  }, []);
  return (
    <button type="button" onClick={handleSubscribe}>
      Subscribe
    </button>
  );
}

interface PhoneNumber {
  mobileNumber: string;
}

function subscribeDevice(params: PhoneNumber) {
  const opts: RequestInit = {
    body: JSON.stringify(params),
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.ALERTMOON_API}/device/subscribe`, opts).then(r =>
    r.json(),
  );
}

function SearchButton() {
  const handleSearch = useCallback(async () => {
    const result = await searchDevice({
      mobileNumber: '79991002030',
    });
    console.log(result);
  }, []);
  return (
    <button type="button" onClick={handleSearch}>
      Search
    </button>
  );
}

function searchDevice(params: PhoneNumber) {
  const opts: RequestInit = {
    body: JSON.stringify(params),
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.ALERTMOON_API}/pattern/search`, opts).then(r =>
    r.json(),
  );
}

interface SmsContent {
  content: string;
}

function SmsLogButton() {
  const handleLogSms = useCallback(() => {
    smsLog({
      mobileNumber: '79991002030',
      content: String(Date.now()),
    });
  }, []);
  return (
    <button type="button" onClick={handleLogSms}>
      Log Random Sms
    </button>
  );
}

function smsLog(params: PhoneNumber & SmsContent) {
  const opts: RequestInit = {
    body: JSON.stringify(params),
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.ALERTMOON_API}/device/sms/log`, opts).then(r =>
    r.json(),
  );
}

function SmsSearchButton() {
  const handleSearchSms = useCallback(async () => {
    const result = await smsSearch({
      mobileNumber: '79991002030',
    });
    console.log(result);
  }, []);
  return (
    <button type="button" onClick={handleSearchSms}>
      Search SMS
    </button>
  );
}

function smsSearch(params: PhoneNumber) {
  const opts: RequestInit = {
    body: JSON.stringify(params),
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.ALERTMOON_API}/device/sms/search`, opts).then(r =>
    r.json(),
  );
}
