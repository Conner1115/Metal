/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/About.module.css";
import Nav from "../components/nav.js";
import Mark from "../components/project";

export default function Prod() {
  return (
    <div>
      <div
        className={styles.fxd}
        style={{ backgroundImage: "url(/products.jpeg)" }}
      >
        <div className={styles.cntr}>
          <div className={styles.cnt}>
            <h1 style={{ margin: 0 }}>Products & Services</h1>
          </div>
        </div>
      </div>
      <div style={{ padding: "50px 0" }}>
        <h2>What we build</h2>
        <Mark
          icon="/icons/stairs.svg"
          title="Railings & Stairs"
          description="Don't fall, call! Let us customize and install handrails for your exterior stairs."
        />
        <Mark
          icon="/icons/fence.svg"
          title="Fences & Gates"
          description="Our fences can ensure captivity for anything from crickets to humans to elephants."
        />
        <Mark
          icon="/icons/grill.svg"
          title="Outdoor Living"
          description="Let us repair your aluminum boat so that your ship doesn't sink!"
        />
        <Mark
          icon="/icons/trailer.svg"
          title="Custom Trailer Modification"
          description="Let's step up your trailer to the next level.  Well, maybe not too many levels if your specifications don't follow the law."
        />
        <Mark
          icon="/icons/truss.svg"
          title="Steel Trusses"
          description="The outcomes of trusses are endless - Cages, Stages, Handyman Monkey Bars, and more."
        />
        <Mark
          icon="/icons/custom.svg"
          title="Custom Requests"
          description="Need something that's not on the list?  Be sure to get in touch."
        />
        <a
          href={`mailto:allmetalwelding1@gmail.com?subject=Please give me a quote
          &body=What do you want me to build%3F%0A%0AWhere are you located%3F%0A%0AAny video/picture attachments or comments%3F`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="center button">Get a Quote</button>
        </a>
      </div>

      <Nav />
    </div>
  );
}
