import useSWR from 'swr';
import Head from 'next/head';
import Image from 'next/legacy/image';
import {useAuth} from '../features/auth';
import styles from './PhoneList.module.css';
import Link from 'next/link';

const PhoneList = () => {
  const auth = useAuth();
  if (!auth.session) return null;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          <Link href="/">Главная</Link>
        </p>
        <SmsList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default PhoneList;

function smsSearch(params = {}): Promise<Array<{content: string; id: string}>> {
  const opts: RequestInit = {
    body: JSON.stringify(params),
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.ALERTMOON_API}/notification/search`, opts).then(
    r => r.json(),
  );
}

function SmsList() {
  const {data} = useSWR('notificationList', () => smsSearch());
  return (
    <ul>
      {data?.map(notification => (
        <li key={notification.id}>{notification.content}</li>
      ))}
    </ul>
  );
}
