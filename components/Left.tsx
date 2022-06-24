import styles from './Left.module.css'

type Props = {
  children: React.ReactNode;
}

export default ({ children }: Props) =>
  <div className={styles.container}>
    {children}
  </div>