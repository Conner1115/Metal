import Link from "next/link";
import Nav from "../components/nav";

export default function ContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h2>Contact Us</h2>
        <ul style={{ maxWidth: 360, fontSize: 20 }}>
          <li>
            Phone number: <a href="tel:903-422-6584">903-422-6584</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:allmetalwelding1@gmail.com">
              allmetalwelding1@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <Nav />
    </div>
  );
}
