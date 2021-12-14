import styles from '../styles/Nav.module.css'
import Link from 'next/link'
export default function Nav(){
  return (
    <div className={styles.nav}>
      <div id="logo-parent">
        <Link passHref href="/">
          <img alt="logo" src="/logo.svg" className={styles.img} width="75" height="75"/>
        </Link>
      </div>
      <div className={styles.flinks}>
        <Link href="/about">Who we are</Link>
        <Link href="/products">Products</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/careers">Careers</Link>
      </div>
    </div>
  );
}