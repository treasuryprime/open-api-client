import clsx from 'clsx';
import styles from './MethodChip.module.css'

type Props = {
  method: 'put' | 'post' | 'patch' | 'get';
};

export default ({ method }: Props) => {
  return <span className={clsx(styles.chip, styles[method])}>{ method.toUpperCase() }</span>;
}