import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import classes from './Layout.module.css'

const Layout = props => {
  return (
    <div className={classes.layout}>
      <Header />
      <Page>{props.children}</Page>
      <Footer />
    </div>
  )
}

export default Layout