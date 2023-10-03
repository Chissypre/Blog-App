import './About.styles.css'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <main className='AboutSection'>
            <div className="AboutContent">
    <h2>About Our Tech Page</h2>
    <p>Welcome to our tech page, your go-to source for all things technology. We are passionate about keeping you updated on the latest tech trends, innovations, and news from the ever-evolving world of technology.</p>
    <p>Our mission is to provide insightful and informative content that helps you stay ahead in the digital age. Whether you're a tech enthusiast, a professional in the industry, or just curious about the latest gadgets and software, you'll find something valuable here.</p>
    <p>At our tech page, you can expect to find:</p>
    <ul>
      <li><strong>News & Updates:</strong> Stay informed with the latest tech news and trends.</li>
      <li><strong>Product Reviews:</strong> In-depth reviews of the newest tech products and gadgets.</li>
      <li><strong>Tutorials & Guides:</strong> Step-by-step tutorials and guides to help you make the most of your tech.</li>
      <li><strong>Expert Insights:</strong> Articles written by tech experts sharing their knowledge and opinions.</li>
    </ul>
    <p>Join us on our tech journey as we explore the limitless possibilities of technology and its impact on our lives.  <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p></p>
  </div>
        </main>
    )
}

export default About