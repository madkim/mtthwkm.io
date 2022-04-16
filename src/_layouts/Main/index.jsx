import { Outlet } from 'react-router-dom'
import { Component } from 'react'

// import Footer from '../../_components/Footer'

class MainLayout extends Component {
  render() {
    return (
      <>
        <Outlet />
        {/* <Footer /> */}
      </>
    )
  }
}

export default MainLayout