import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <h4>Meetups Now Online @Copyright</h4>
      </div>
    </footer>
  );
};

export default Footer;
