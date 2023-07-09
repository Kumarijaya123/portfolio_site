import React from 'react'
import './Style/contact.css'
export default function Contact() {
  return (
    <section className='contact-section'>
        <div className="contact">
            <h4>Contact</h4>
            <h2>Chat with me 👓</h2>
            <div className="contact-grid">
                <div className="contact-grid-col-1">
                    <h4>Name</h4>
                    <div className="contact-input">
                        <input type="text" placeholder="Name" />
                    </div>
                    <h4>Message</h4>
                    <div className="contact-input">
                        <textarea></textarea>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
