import styles from './Footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      Email для связи — {process.env.ALERTMOON_EMAIL_CONTACT}
    </footer>
  );
}
