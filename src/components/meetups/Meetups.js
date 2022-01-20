import Meetup from "./Meetup";
import classes from "./Meetups.module.css";

const Meetups = (props) => {
  return (
    <article className={classes.meetups}>
      {props.meetups.map((meetup) => {
        return <Meetup {...meetup} key={meetup.id} />;
      })}
    </article>
  );
};

export default Meetups;
