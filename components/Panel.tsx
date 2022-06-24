import styles from './Panel.module.css'

type Props = {
  title?: string;
  children?: React.ReactNode;
  padding?: string;
  maxHeight?: string;
}

export default ({ title, children, padding, maxHeight = 'initial' }: Props) =>
  <div className={styles.panel}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content} style={{ padding, maxHeight }}>{children}</div>
  </div>