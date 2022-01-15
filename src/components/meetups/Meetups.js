import Meetup from "./Meetup";
import classes from "./Meetups.module.css";

const dummy_meetups = [
  {
    image: {
      src: "/fire-cottage.jpg",
    },
    title: "Cozy Home",
    description: "My cozy home, parents are out. Waiting for you",
    address: "USA, New Texas, 15",
  },
];

const Meetups = (props) => {
  return (
    <article className={classes.meetups}>
      {dummy_meetups.map((meetup) => {
        return <Meetup {...meetup} key={Math.random()} />;
      })}
    </article>
  );
};

export default Meetups;
