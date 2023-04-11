import cc from 'clsx';
import {Avatar} from '@mantine/core';
import styles from './Avatar.module.css';


type Props = {
  username: string
  onClick?: () => void
};

export default function Avatar2(props: Props) {
  const {username, onClick} = props;
  const letter = username[0];
  return (
    <Avatar sx={{cursor: 'pointer'}} variant="outline" color="orange" radius="xl" onClick={onClick}>
      {letter}
    </Avatar>
  );
}
