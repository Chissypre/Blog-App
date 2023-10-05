import './Herosection.styles.css'
import { Link } from 'react-router-dom'


const Herosection = () => {
  return (
    <section className="hero">
    <div className="content">
      <h2>Hi Techy!</h2>
    <p className='para'>Here is your go to place for insightful tech content Discover amazing tech content and more.</p>
      
      <Link to='/Newsletter'><button>Learn More</button></Link>
    </div>
  </section>
  )
}

export default Herosection