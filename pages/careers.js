/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/About.module.css";
import Nav from "../components/nav.js";

export default function About() {
  return (
    <div>
      <div
        className={styles.fxd}
        style={{ backgroundImage: "url(/careers.jpeg)" }}
      >
        <div className={styles.cntr}>
          <div className={styles.cnt}>
            <h1 style={{ margin: 0 }}>Careers</h1>
            <h3>We&apos;re hiring!!</h3>
          </div>
        </div>
      </div>
      <div style={{ padding: "20vh 0" }}>
        <h3>Looking for an opportunity?</h3>
        <p className="par">
          We are looking for anyone who is passionate about welding and
          metalworking. Have a decent amount of skills in those fields? Be sure
          to consider joining us!
        </p>

        <h3>What you&apos;ll do</h3>
        <p className="par">
          You&apos;ll navigate to different sites and build what clients are
          requesting, together as a team. Whether it be a house frame, a small
          structure, or a fence, you&apos;ll play a big part in constructing it.
        </p>
        <p className="par">
          We&apos;re looking for people who enjoy collaborating, sharing their
          ideas, and adding creative features into their work.
        </p>

        <Link href="/contact" passHref>
          <button className="center button">Contact Us</button>
        </Link>
      </div>
      <Nav />
    </div>
  );
}
