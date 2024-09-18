/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/About.module.css";
import Nav from "../components/nav.js";
import Quote from "../components/quote.js";

export default function Tst() {
  return (
    <div>
      <div className={styles.fxd} style={{ backgroundImage: "url(/tst.jpeg)" }}>
        <div className={styles.cntr}>
          <div className={styles.cnt}>
            <h1 style={{ margin: 0 }}>Testimonials</h1>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 50 }}>
        <Quote
          text="
Phil did a great job. Superior workmanship. Kept me informed all the way through the project. Used quality materials. Provided options and suggestions for our gate issues. Fixed (better than new) all gates and fence. Will use them again and recommend to all friends."
          author="Robert B. (Mckinney, TX)"
        />

        <Quote
          text="Extremely happy with their work, but also the communication. They were very responsive. gave us a reminder of appointment, and followed up after as well. In addition, the workmanship was excellent. I will not only use them again, but will certainly give them referral business in the future."
          author="Christopher M. (Parker, TX)"
        />

        <Quote
          text="These guys were terrific craftsmen. Perfectly done. So good that after they gave me their bill, which was very reasonable, I added enough to buy them a great lunch."
          author="Garth J. (Dallas, TX)"
        />

        <Quote
          text="Very professional. Showed up on-time. Excellent welders!! They cleaned up the mess the last welding company did to the gate latches, and then checked the entire fence for any other damage. Phillip Davis is definitely in our contact list!!"
          author="Glenn B. (Parker, TX)"
        />

        <Quote
          text="Very prompt response with excellent quality. Went above and beyond expectations and offered good advice for maintaining the fence and gates."
          author="James S. (Mckinney, TX)"
        />

        <Quote
          text="Philip Davis is a talented and honest welder and craftsman. I had him complete 2 recent projects. The first was the replacement of a section of wrought iron fencing that had been crushed by a fallen tree. The second was the design and fabrication of a chimney cap for my home. Both of these projects were done professionally, and with creativity and I believe were fairly priced. He is an excellent communicator, responsive, and can be counted on to do what he says he will do and on time. I highly recommend him without any reservations."
          author="A K. (Dallas, TX)"
        />
      </div>
      <div style={{ padding: "50px 0" }}>
        <h2>Your move.</h2>
        <Link href="/contact" passHref>
          <button className="center button">Get a Quote</button>
        </Link>
      </div>
      <Nav />
    </div>
  );
}
