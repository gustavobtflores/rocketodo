import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="" />
    </div>
  );
}
