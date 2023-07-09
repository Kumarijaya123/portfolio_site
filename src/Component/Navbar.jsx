import React,{useState} from 'react'
import './Style/navbar.css'
import menuImg from './Image/menu.png'
import closeImg from './Image/close.png'


export default function Navbar() {

    const [hamburgMenu,setHamburgMenu]=useState(false)
 
    function handleHamburg(){
        setHamburgMenu(!hamburgMenu)
    }
    function handleHamburgClose(){
        setHamburgMenu(!hamburgMenu)
    }

    function handleHome(){
        const elem=document.getElementById('heros')
        elem.scrollIntoView({behavior:'smooth'})
    }
    function handleProject(){
        const elem=document.getElementById('projects')
        elem.scrollIntoView({behavior:'smooth'})
    }
    function handleAbout(){
        const elem=document.getElementById('abouts')
        elem.scrollIntoView({behavior:'smooth'})
    }
    function handleContact(){
        window.open('https://www.linkedin.com/in/aryan-pathak-6662361aa/', '_blank');
    }

  return (
    <>
        {hamburgMenu?
        <div className="humberg-menu">
            <div className="close-burger" onClick={handleHamburgClose}>
                <img width={'25px'} height={'25px'} src={closeImg} alt="" />
            </div>
            <div className="burger-item">
                <ul className='nav-burger-lists' style={{listStyle:'none'}}>
                    <li className='nav-burger-items'onClick={handleHome}>Home</li>
                    <li className='nav-burger-items'onClick={handleProject}>Project</li>
                    <li className='nav-burger-items'onClick={handleAbout}>About</li>
                    <li className='nav-burger-items'onClick={handleContact}>Contact</li>
                </ul>
            </div>
        </div>:""}
        <div className='navbar'>
            <div className="brand">
                <h2>jaya.dev</h2>
            </div>
            <div className="nav-list">
                <ul className='nav-lists' style={{listStyle:'none',display:'flex'}}>
                    <li className='nav-items' onClick={handleHome}>Home</li>
                    <li className='nav-items' onClick={handleProject}>Project</li>
                    <li className='nav-items' onClick={handleAbout}>About</li>
                    <li className='nav-items' onClick={handleContact}>Contact</li>
                </ul>
            </div>
            {hamburgMenu?"":
                <div className="humburger" onClick={handleHamburg}>
                    <img width={'30px'} height={'30px'}  src={menuImg}></img>
                </div>
        }
        </div>
        
    </>
  )
}
