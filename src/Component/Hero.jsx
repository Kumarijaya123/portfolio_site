import React from 'react'
import './Style/hero.css'
import linkdinImg from './Image/linkedin.png'
import gitHubImg from './Image/github-logo.png'
import htmlImg from './Image/html-5.png'
import jsImg from './Image/js.png'
import mysqlImg from './Image/mysql.png'
import reactImg from './Image/physics.png'
import cssImg from './Image/css-3.png'
import mongoImg from './Image/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import awsImg from './Image/icons8-amazon-web-services-48.png'
import nodeImg from './Image/icons8-nodejs-48.png'
import cplusImg from './Image/icons8-c-48.png'
import myimg from './Image/Myimg.jpg'
import intro from './video/intro-video.mp4'
import heroImg from './Image/heromyImg.png'


export default function Hero() {

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
      };

    function handleLinkdin(){

        window.open('https://github.com/Kumarijaya123', '_blank');
    }
    function handleGitHub(){

        window.open('https://github.com/Kumarijaya123', '_blank');
    }

    
      
  return (
    <section className='Hero-section' id='heros'>
        <div className='Hero'>
                <div className='grid-col-1'>
                    <h1 className='hero-title'>Full-Stack Web Developer✌</h1>
                    <div className="hero-description">
                        Hi, I'm Kumari Jaya. A passionate Full-Stack Web Developer based in Bhopal,India  📍
                    </div>
                    <div className="hero-contact">
                        <img src={linkdinImg} width={'25px'} height={'25px'} alt='linkdin' onClick={handleLinkdin} ></img>
                        <img src={gitHubImg} width={'25px'} height={'25px'} alt='git-hub' onClick={handleGitHub}></img>
                    </div>
                </div>
                <div className='grid-col-2'>
                    <img className='hero-section-img-1' src={heroImg} alt="my-image"/>
                </div>
        </div>
        <div className='grid-col-3'>
            <span className='tech-stack-title' style={{display:'flex',alignItems:'center',padding:'10px 0px' ,paddingRight:'20px',borderRight:'2px solid #808080'}}>Tech Stack</span>
            <span>
                <ul className='tech-stack-list' style={{listStyle:'none',display:'flex',alignItems:'center'}}>
                    <li>
                        <img className='tech-stack-img' src={htmlImg} alt="html" /></li>
                    <li>
                        <img className='tech-stack-img' src={cssImg} alt="css" /></li>
                    <li>
                        <img className='tech-stack-img' src={jsImg} alt="javascript" /></li>
                    <li>
                        <img className='tech-stack-img' src={reactImg} alt="react" /></li>
                    <li>
                        <img className='tech-stack-img' src={nodeImg} alt="node" /></li>
                    <li>
                        <img className='tech-stack-img' src={mongoImg} alt="mongo" /></li>
                    <li>
                        <img className='tech-stack-img' src={mysqlImg} alt="mysql" /></li>
                    <li>
                        <img className='tech-stack-img' src={cplusImg} alt="c++" /></li>
                    <li>
                        <img className='tech-stack-img' src={awsImg} alt="aws" /></li>
                </ul>
            </span>
        </div>
    </section>
  )
}
