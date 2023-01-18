import {DragEventHandler} from 'react';
import Image from 'next/image';
import Avatar from './Avatar';
import MenuList from './MenuList';
import styles from './Header.module.css';


const onStopDragging: DragEventHandler = (e) => {
  e.preventDefault();
}

const menuItems = [
  {
    title: 'Главная',
    href: '/app'
  },
  {
    title: 'Профиль',
    href: '/profile'
  }
];

export default function Header() {
  return (
    <nav className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Логотип Alertmoon"
        width={64}
        height={64}
        onDragStart={onStopDragging}
      />
      <MenuList className={styles.menu} items={menuItems} />
      <Avatar username={"John Doe"} />
    </nav>
  );
}
