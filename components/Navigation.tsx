import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '../public/data.json';
import styles from '../styles/Navigation.module.css';

type Props = {
  route: string;
  name: string;
}

const NavLink = ({ route, name }: Props) => {
  const router = useRouter();
  return <Link href={`/docs/?endpoint=${route}`}>
    <a className={clsx(styles.link, router.query?.endpoint === route && styles.active)}>{name}</a>
  </Link>
};

export default () =>
<div className={styles.container}>
  {Object.keys(data.paths).sort().map((path) => <NavLink key={path} route={path} name={path} />)}
</div>
