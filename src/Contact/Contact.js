import './Contact.styles.css'

import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Clear the input fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="ContactPage">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Send us a message below.</p>
      <form className="conform" onSubmit={handleSubmit}>
        <div className="conform-group">
          <label className="conlabel" htmlFor="name">Name:</label>
          <input
          className='coninput'
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="conform-group">
          <label className="conlabel" htmlFor="email">Email:</label>
          <input
          className='coninput'
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="conform-group">
          <label className="conlabel" htmlFor="message">Message:</label>
          <textarea 
          className="contextarea"
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="conform-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
