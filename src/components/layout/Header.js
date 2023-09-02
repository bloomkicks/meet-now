import Link from "next/link";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <Link href="/meetups" passHref>
          <h2>Meet Now</h2>
        </Link>
        <nav>
          <Link href="/meetups">Meetups</Link>
          <Link href="/add-meetup">Add Meetup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
