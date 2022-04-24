import { Outlet } from 'react-router-dom'
import { Component, Fragment } from 'react'

// import Footer from '../../_components/Footer'
import Navbar from '../../_components/Navbar'
import Header from '../../_components/Header'

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <br />
        <Header />
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </Fragment>
    )
  }
}

export default MainLayout
