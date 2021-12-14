/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/About.module.css'
import Nav from '../components/nav.js'

export default function About() {
  return (
    <div>
      <div className={styles.fxd} style={{ backgroundImage: "url(/about.jpeg)" }}>
        <div className={styles.cntr}>
          <div className={styles.cnt}>
            <h1 style={{ margin: 0 }}>Who we are</h1>
            <h3>(We{"'"}re welders)</h3>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        
        <p className="par">We are a small family business of masterful metalworkers, etc.  This blank paragraph will be filled with dummy text to fill up space and will be completed later.</p>

        <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, elit a tincidunt iaculis, augue nulla laoreet est, eget dapibus velit metus sed eros. Cras scelerisque et est sit amet interdum. Vivamus varius accumsan mauris, id pharetra arcu imperdiet commodo. Sed suscipit erat magna, eget cursus quam rhoncus eu.</p>

        <p className="par">Sed scelerisque nibh a leo pulvinar, vestibulum pretium turpis elementum. Nullam volutpat maximus orci, ac viverra justo ornare sit amet. Cras placerat ipsum nibh, vel iaculis neque luctus id. Integer viverra, eros vitae ultrices pellentesque, velit turpis placerat mauris, sed scelerisque augue tellus vitae enim.</p>
      </div>
      <div style={{ padding: "50px 0" }}>
        <h2>Have a job for me?  I{"'"}m the man for it.</h2>
        <p style={{ textAlign: "center" }}>Excluding spaceships, mechs, and other outrageous devices.</p>
        <a href={`mailto:allmetalwelding1@gmail.com?subject=Please give me a quote
          &body=What do you want me to build%3F%0A%0AWhere are you located%3F%0A%0AAny video/picture attachments or comments%3F`} target="_blank" rel="noreferrer">
          <button className="center button">Get a Quote</button>
        </a>
      </div>
      <Nav />
    </div>
  );
}
