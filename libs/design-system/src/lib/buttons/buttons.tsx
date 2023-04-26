import styles from './buttons.module.css';
import { ButtonsProps } from '../../interfaces/buttons/buttons.interface';
/* eslint-disable-next-line */

export function Buttons(props: ButtonsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Buttons!</h1>
    </div>
  );
}

export default Buttons;
