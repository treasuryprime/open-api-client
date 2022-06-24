import styles from './EndpointMethod.module.css'
import MethodChip from './MethodChip';

type Props = {
  method: 'put' | 'post' | 'patch' | 'get';
  route: string;
  href?: string;
  showArrow?: boolean;
}

export default ({ method, route, href, showArrow = false }: Props) =>
  <div className={styles.container}>
    <span className={styles.left}>
      <div className={styles.chip}>
        <MethodChip method={method} />
      </div>
      <span className={styles.route}>{route}</span>
    </span>
    {showArrow && <img className={styles.arrow} src="/chevron-right.svg" />}
  </div>