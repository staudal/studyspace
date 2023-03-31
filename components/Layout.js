import { Fragment } from 'react'
import Navbar from './general/Navbar'
import MainSection from './MainSection'

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout
