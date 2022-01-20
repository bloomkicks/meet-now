import classes from './MeetupDetails.module.css'
import meetupClasses from '../meetups/Meetup.module.css'

const MeetupDetails = props => {
  const {
    image,
    title,
    description,
    address,
  } = props.meetup

  return (
    <section className={`${meetupClasses.meetup} ${classes.details}`}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <address>{address}</address>
    </section>
  )
}

export default MeetupDetails