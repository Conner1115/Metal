import styles from '../styles/Nav.module.css'
import Link from 'next/link'
export default function Nav(){
  return (
    <nav className={styles.nav}>
      <div id="logo-parent">
        <Link passHref href="/">
          <img alt="logo" src="/logo.svg" className={styles.img} width="75" height="75"/>
        </Link>
      </div>
      <div className={styles.flinks}>
        <Link href="/products">Products</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}