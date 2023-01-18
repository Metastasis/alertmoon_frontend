import NextLink, {LinkProps} from 'next/link';
import cc from 'clsx';
import styles from './MenuList.module.css';
import {ReactNode} from 'react';


type MenuItem = {
  title: string
  href: string
};

type Props = {
  items: MenuItem[]
  className?: string
};

export default function MenuList(props: Props) {
  const {items, className} = props;
  return (
    <ul className={cc(styles.root, className)}>
      {items.map(item => (
        <li key={item.href} className={styles.item}>
          <Link href={item.href} className={styles.itemContent}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}


function Link({ children, className, ...rest }: LinkProps & {children: ReactNode, className?: string}) {
  return (
    <NextLink {...rest} passHref>
      <a className={className}>
        {children}
      </a>
    </NextLink>
  );
}
