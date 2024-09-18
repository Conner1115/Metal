/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Mark from "../components/project";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.flexCore}>
          <div className={styles.half0}></div>
          <div className={styles.half1}></div>
        </div>
        <div className={styles.cover}>
          <h1 className={styles.hd} style={{ marginLeft: "5vw" }}>
            Welding done Right
          </h1>
          <div className={styles.indFlex}>
            <div>
              <div className={styles.bar}></div>
              <h2 className={styles.hd2}>All Metal Welding</h2>
              <p className={styles.pard} style={{ maxWidth: 500 }}>
                We are a small family business that specializes in building
                exterior stair railings, fences, and more.
              </p>
              <a
                href={`mailto:allmetalwelding1@gmail.com?subject=Please give me a quote
          &body=What do you want me to build%3F%0A%0AWhere are you located%3F%0A%0AAny video/picture attachments or comments%3F`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">Get a Quote</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <div className="sec-cont" style={{ paddingTop: "20vh" }}>
        <h2>The right man for the job</h2>
        <p className="par">
          Mr. Philip Davis can weld anything from fences to trailers to house
          frames. If you need metalworking, he{"'"}s the right guy.
        </p>
        <p className="par">
          If he{"'"}s built you something in the past, be sure to drop him a
          good review at HomeAdvisor!
        </p>
        <a href="https://homeadvisor.com" target="_blank" rel="noreferrer">
          <button className="button center">Write a Review</button>
        </a>
      </div>
      <div style={{ background: "var(--bg-dk2)" }}>
        <div
          className="xpath"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 100% 0)",
            background: "var(--bg-dk1)",
          }}
        ></div>
        <h2 style={{ margin: "50 0" }}>Services for Every Market</h2>
        <Mark
          icon="/icons/house.svg"
          title="Residential"
          description="Need something to improve your home?  We've got you covered.  Simply ask, and we'll give you a quote."
        />
        <Mark
          icon="/icons/com.svg"
          title="Commercial"
          description="Metalworking goes beyond the scope of homes!  If your company needs a welder, you've found one of the best."
        />
        <Mark
          icon="/icons/gov.svg"
          title="Government"
          description="Unfortunately, presidential statues are not on the list, but anything involving welding is!"
        />
        <Mark
          icon="/icons/res.svg"
          title="Retail/Restaurant"
          description="Cooking isn't usually a talent of metalworkers, but I can say I'll be able to cook up any metal object for you."
        />
        <Mark
          icon="/icons/tractor.svg"
          title="Farms & Ranches"
          description="Fences or barns anyone?  I can do it all including making extra-sharp fences that'll keep your cows in your property (not recomended)"
        />
      </div>
      <div>
        <div
          className="xpath"
          style={{
            clipPath: "polygon(0 0, 0% 100%, 100% 0)",
            background: "var(--bg-dk2)",
          }}
        ></div>
        <h1>Gallery</h1>
        <div className={styles.responsiveGrid}>
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img3.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img6.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img7.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img8.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img9.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img10.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img11.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img13.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img14.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img15.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img16.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img17.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img19.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img20.jpg"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img21.png"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img22.png"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img23.png"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img24.png"
          />
          <img
            className={styles.childImg}
            alt="Gallery Image"
            src="/metal/img25.png"
          />
        </div>
        <div style={{ padding: "20vh 0" }}>
          <h2>Need a job done?</h2>
          <p style={{ textAlign: "center" }}>
            We{"'"}ll be happy to get right over and gauruntee satisfaction.
          </p>
          <Link href="/contact" passHref>
            <button className="center button">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
