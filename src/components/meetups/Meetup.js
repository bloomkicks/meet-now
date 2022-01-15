import classes from './Meetup.module.css'

const Meetup = props => {
  const {
    description,
    address,
    image,
    title
 } = props

  return (
    <section className={classes.meetup}>
      <img src={image.src} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <address>{address}</address>
    </section>
  )
}

export default Meetup