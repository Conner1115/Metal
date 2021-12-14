/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/About.module.css'
import Nav from '../components/nav.js'

export default function About() {
  return (
    <div>
      <div className={styles.fxd} style={{ backgroundImage: "url(/careers.jpeg)" }}>
        <div className={styles.cntr}>
          <div className={styles.cnt}>
            <h1 style={{ margin: 0 }}>Careers</h1>
            <h3>We&apos;re hiring!</h3>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
      <p className="par">We are looking for anyone who is passionate about welding and metalworking.  Have a decent amount of skills in those fields?  Be sure to consider joining us!</p>

        <h3>What you&apos;ll do</h3>
        <p className="par">You&apos;ll navigate to different sites and build what clients are requesting, together as a team.  Whether it be a house frame, a small structure, or a fence, you&apos;ll play a big part in constructing it.</p>
        <p className="par">We&apos;re looking for people who enjoy collaborating, sharing their ideas, and adding creative features into their work.</p>

        <h3>Requirements</h3>
        <p className="par">[Implement Requirements here]  (For now this will be filled with test text until the real content can be added.)</p>
      </div>
      <Nav />
    </div>
  );
}
