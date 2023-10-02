import './Layout.styles.css'

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="App">
      <Header title="TECH Blog" />
      <Nav/>
      <Outlet />
      <Footer />
      </div>
  )
}

export default Layout