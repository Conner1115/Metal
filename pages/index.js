import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav"

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flexCore}>
          <div className={styles.half0}></div>
          <div className={styles.half1}></div>
        </div>
        <div className={styles.cover}>
          <h1 className={styles.hd} style={{marginLeft: "5vw"}}>Welding done Right</h1>
          <div className={styles.indFlex}>
          
            <div>
              <div className={styles.bar}></div>
              <h2 className={styles.hd2}>Phillip Davis</h2>
              <p className={styles.pard} style={{maxWidth: 500}}>This is a short description of the work that we do.  For the moment it is filled with dummy text and will be updated later.</p>
              <Link href="mailto:quote@allmetalwelding.com" passHref>
                <button className="button">Get a Quote</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    <Nav />
    <div className="sec-cont">
      <h2>The right man for the job</h2>
      <p className="par">Mr. Phillip Davis can weld anything from fences to trailers to house frames.  If you need metalworking, he{"'"}s the right guy.</p>
      <p className="par">If he{"'"}s built you something in the past, be sure to drop him a good review at HomeAdvisor!</p>
      <a href="https://homeadvisor.com" target="_blank" rel="noreferrer">
        <button className="button center">Write a Review</button>
      </a>
    </div>
    <div style={{background:"var(--bg-dk2)"}}>
    <div className="xpath" style={{clipPath: "polygon(0 0, 100% 100%, 100% 0);", background:'var(--bg-dk1)'}}></div>
    <h2 style={{margin: "50 0"}}>Past Works</h2>
    
    </div>
    </div>
  );
}
