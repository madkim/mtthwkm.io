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
        <div className='d-none d-lg-flex'>
          <Header />
        </div>
        <div className='d-flex justify-content-end container-fluid'>
          <Navbar />
        </div>
        <Outlet />
        {/* <Footer /> */}
      </Fragment>
    )
  }
}

export default MainLayout
