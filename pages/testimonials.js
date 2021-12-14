/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '../styles/About.module.css'
import Nav from '../components/nav.js'
import Quote from "../components/quote.js"

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
        <Quote text="This is a test quote filled up with test text that will be filled out later.  Mr. Davis is the best!!" author="Anonymous"/>

        <Quote text="This is another test quote filled up with test text whose only purpose is to fill up space so that the preview of the site can be shown." author="Nobody"/>

        <Quote text="Extremely skilled welder.  One of the best in the state of Texas.  Once you ask him to make you something, you can't stop" author="Phantom"/>
      </div>
      <div style={{ padding: "50px 0" }}>
        <h2>I{"'"}m right here and ready for you</h2>
        <p style={{ textAlign: "center" }}>Ready to improve your home or business?  I{"'"}ll get building</p>
        <a href={`mailto:allmetalwelding1@gmail.com?subject=Please give me a quote
          &body=What do you want me to build%3F%0A%0AWhere are you located%3F%0A%0AAny video/picture attachments or comments%3F`} target="_blank" rel="noreferrer">
          <button className="center button">Get a Quote</button>
        </a>
      </div>
      <Nav />
    </div>
  );
}
