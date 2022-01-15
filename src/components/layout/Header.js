import Link from "next/link";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2>Next Meetups</h2>
        <nav>
          <Link href="/meetups">Meetups</Link>
          <Link href="/add-meetup">Add Meetup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
