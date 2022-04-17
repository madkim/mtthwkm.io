import { Outlet } from 'react-router-dom'
import { Component, Fragment } from 'react'

import Footer from '../../_components/Footer'

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <Outlet />
        <Footer />
      </Fragment>
    )
  }
}

export default MainLayout