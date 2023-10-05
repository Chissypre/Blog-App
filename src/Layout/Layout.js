
import Herosection from "../Herosection/Herosection"
import './Layout.styles.css'
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = ({search, setSearch}) => {
  const location = useLocation();
  
  
  

  return (
    <div className="layout">
      <div className="navigation">
      <Header
      search={search}
      setSearch={setSearch}
      />
      <Nav/>
      </div>
      {location.pathname === '/' && <Herosection />}
      <Outlet/>
      <Footer />
      </div>
  )
}

export default Layout