import styles from './design-systems.module.css';

/* eslint-disable-next-line */
export interface DesignSystemsProps {}

export function DesignSystems(props: DesignSystemsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DesignSystems!</h1>
    </div>
  );
}

export default DesignSystems;
