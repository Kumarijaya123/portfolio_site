import React from 'react'
import './Style/about.css'
import aboutImg from './Image/Myimg.jpg'
import reactImg from './Image/physics.png'

export default function About() {
  return (
    <section className='About-Sectiion' id='abouts'>
        <article className='about'>
            <div className="grid-about-col-1">
                {/* <img className='about-grid-1-img' src={aboutImg} alt="about me" /> */}
                <span>
                    <img style={{maxWidth:'50px',maxHeight:'50px',transform:'scale(1.3,1.3)'}} src={reactImg} alt="" />
                </span>
            </div>
            <div className="grid-about-col-2">
                <h4>ABOUT ME</h4>
                <h2>An Aspiring Full-Stack Web Developer 👀</h2>
                <p>I'm a passionate full stack developer with expertise in AWS technologies. With a strong focus on creating seamless user experiences, I thrive in designing and implementing scalable web applications. My knowledge of AWS allows me to leverage cloud services for optimal performance and security.</p>
                <p>In recognition of my technical abilities, I am proud to have ranked among the top 130 coders at LPU (Lovely Professional University). This accomplishment showcases my commitment to excellence and my proficiency in solving complex coding challenges.</p>
            </div>
        </article>
    </section>
  )
}
