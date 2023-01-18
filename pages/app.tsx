import {useAuth} from '../features/auth';
import {PageList} from '../features/notification';


export default function App() {
  const auth = useAuth();
  if (!auth.session) return null;
  return <PageList />;
}
