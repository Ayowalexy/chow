import styles from './typography.module.css';
import { TypographyProps } from '../../interfaces/typography/typography.interface';
/* eslint-disable-next-line */

export function Typography(props: TypographyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Typography!</h1>
    </div>
  );
}

export default Typography;
