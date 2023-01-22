import cc from 'clsx';
import styles from './Avatar.module.css';


type Props = {
  username: string
  onClick?: () => void
};

export default function Avatar(props: Props) {
  const {username, onClick} = props;
  const letter = username[0];
  return (
    <div className={cc(styles.root, 'font16')} onClick={onClick}>
      {letter}
    </div>
  );
}
