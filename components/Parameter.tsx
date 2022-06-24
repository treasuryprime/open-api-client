import styles from './Parameter.module.css'

type Props = {
  name: string;
  required?: boolean;
  type: string;
  filterable?: boolean;
  children?: React.ReactNode;
}

export default ({ name, required = false, type, filterable = false, children }: Props) =>
  <div className={styles.container}>
    <div className={styles.row}>
      <span className={styles.name}>{name}</span>
      <div className={styles.attributes}>
        <span>
          <span>{type}</span>
          {filterable && <span className={styles.filterable}>filterable</span>}
        </span>
        {required && <span className={styles.required}>required</span>}
      </div>
    </div>
    {children}
  </div>