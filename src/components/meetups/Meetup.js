import Link from "next/link";
import classes from "./Meetup.module.css";

const Meetup = (props) => {
  const { address, image, title, id } = props;

  return (
    <section className={classes.meetup}>
      <img src={image || ""} alt={title} />
      <h2>{title}</h2>
      <address>{address}</address>
      <Link href={`/${id}`}>View details</Link>
    </section>
  );
};

export default Meetup;
