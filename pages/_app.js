import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "green",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "red",
          fontSize: "5rem",
        }}
      >
        Wildflower Manor
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontSize: "3rem",
        }}
      >
        <Link href="/rooms"><div>Rooms</div></Link>
        <Link href="/map"><div>Location</div></Link>
        <Link href="/gallery"><div>Gallery</div></Link>
        <Link href="/info"><div>Inforation</div></Link>
        <Link href="/contact-us"><div>Contact Us</div></Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
