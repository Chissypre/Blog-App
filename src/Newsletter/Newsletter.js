import './Newsletter.styles.css'
import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here (e.g., sending the email to a server).
    console.log(`Subscribed with email: ${email}`);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className="NewsletterSignup">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay up-to-date with our latest blog posts and tech news.</p>
      <form className="form"onSubmit={handleSubmit}>
        <div className="form-group">
          <input
          className='input'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className= "button" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
