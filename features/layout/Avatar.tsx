import cc from 'clsx';
import styles from './Avatar.module.css';


type Props = {
  username: string
};

export default function Avatar(props: Props) {
  const letter = props.username[0];
  return (
    <div className={cc(styles.root, 'font16')}>
      {letter}
    </div>
  );
}
