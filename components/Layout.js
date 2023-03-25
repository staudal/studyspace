import { Fragment } from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout
