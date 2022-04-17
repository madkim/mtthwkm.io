import { Outlet } from 'react-router-dom'
import { Component, Fragment } from 'react'

import Footer from '../../_components/Footer'
import Navbar from '../../_components/Navbar'

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <br />
        <Navbar />
        <Outlet />
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout