import classes from './Page.module.css'

const Page = props => {
  return (
    <main className={classes.page}>
      {props.children}
    </main>
  )
}

export default Page