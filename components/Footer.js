import Link from "next/link";

export default function Footer({ black, ...props }) {
  return (
    <footer
      {...props}
      className={
        "fixed z-10 bottom-0 left-0 flex items-center w-screen overflow-y-hidden overflow-x-auto " +
        (black ? "bg-black" : "mix-blend-difference")
      }
    >
      <img
        className="w-48 pr-8 invert"
        src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.09..23.57.13-2022.7.27..21.22.35-logo-2.png"
      />
      <Link href="/about" passHref>
        <a className="text-2xl text-white pr-8 hover:text-magenta">/about</a>
      </Link>
      <Link href="/work" passHref>
        <a className="text-2xl text-white pr-8 hover:text-magenta">/work</a>
      </Link>
      <Link href="/contact" passHref>
        <a className="text-2xl text-white pr-8 hover:text-magenta">/contact</a>
      </Link>
      {/* <Link href="/store" passHref>
        <a className="text-2xl text-white pr-8 hover:text-magenta">/store</a>
      </Link> */}
    </footer>
  );
}
