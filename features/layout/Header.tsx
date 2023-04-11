import {DragEventHandler, useMemo, useCallback} from 'react';
import Image from 'next/legacy/image';
import {Flex, Header} from '@mantine/core';
import {useRouter} from 'next/router';
import Avatar from './Avatar';
import MenuList from './MenuList';
import {useAuth} from '../auth';
import styles from './Header.module.css';


const onStopDragging: DragEventHandler = (e) => {
  e.preventDefault();
}

export default function Header2() {
  const router = useRouter();
  const auth = useAuth();
  const isAuthorized = Boolean(auth.session);
  const menuItems = useMemo(() => ([
    // {
    //   title: 'Главная',
    //   href: isAuthorized ? '/' : '/app'
    // },
    // {
    //   title: 'Профиль',
    //   href: '/profile'
    // }
  ]), []);
  const onRedirectToMain = useCallback(() => router.push(isAuthorized ? '/app' : '/'), [router, isAuthorized]);
  const onRedirectToProfile = useCallback(() => router.push('/profile'), [router]);
  return (
    <Header height="100%" p="md">
      <Flex align="center" maw="50rem" m="0 auto">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Логотип Alertmoon"
          width={64}
          height={64}
          onDragStart={onStopDragging}
          onClick={onRedirectToMain}
        />
        <MenuList className={styles.menu} items={menuItems} />
        {auth.session && (
          <Avatar username={auth.userName || 'User'} onClick={onRedirectToProfile} />
        )}
      </Flex>
    </Header>
  );
}
