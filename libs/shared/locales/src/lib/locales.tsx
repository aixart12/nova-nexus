import styles from './locales.module.scss';

/* eslint-disable-next-line */
export interface LocalesProps {}

export function Locales(props: LocalesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Locales!</h1>
    </div>
  );
}

export default Locales;
