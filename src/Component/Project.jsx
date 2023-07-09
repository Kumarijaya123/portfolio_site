import React from 'react'
import './Style/project.css'
import codespace from './Image/codespace.png'
import reactImg from './Image/physics.png'
import jsImg from './Image/js.png'
import mysqlImg from './Image/mysql.png'
import gitImg from './Image/github-logo.png'
import nodeImg from './Image/icons8-nodejs-48.png'
import teleImg from './Image/api-project.png'
import movieImg from './Image/movie-review.png'
import htmlImg from './Image/html-5.png'
import cssImg from './Image/css-3.png'


export default function Project() {
  return (
    <section className='Project-section' id='projects'>
        <div className="project">
            <h4>PORTFOLIO</h4>
            <h2>Every Project is unquie piece of development  🐱‍🏍</h2>
            <div className="grid-project-left">
                <div className="grid-project-col-1 id1 id4">
                    {/* <img className='project-img' src={codespace} alt="codespace" /> */}
                </div>
                <div className="grid-project-col-2 grid-project-center">
                    <h4>Codespace Website🎯</h4>
                    <p>Codespace is an online educational platform that deliver high quality
                        educational content related to coding to students. The website also contain
                        few code editor which can be used to solve codig challenge.
                    </p>
                    <span className='project-tech-stack'>
                        <img src={jsImg} alt="javascript"/>
                        <img src={reactImg} alt="react"/>
                        <img src={mysqlImg} alt="mysql"/>
                    </span>
                </div>
            </div>
            <div className="grid-project-right">
                <div className="grid-project-col-2 grid-project-center">
                    <h4>UserState Magment API🔑</h4>
                    <p>This api is capable of managing user state like authentication,product,shop cart etc.
                        This project works healy on Cookies,Session,JWT Tokens.
                    </p>
                    <span className='project-tech-stack'>
                        <img src={nodeImg} alt="javascript"/>
                        <img src={mysqlImg} alt="mysql"/>
                    </span>
                </div>
                <div className="grid-project-col-1 grid-project-center id2 id4">
            
                </div>
            </div>
            <div className="grid-project-left">
                <div className="grid-project-col-1 id3 id4">
                    {/* <img src={movieImg} alt="movie-review-site" /> */}
                </div>
                <div className="grid-project-col-2 grid-project-center">
                    <h4>Movie Fight🏆</h4>
                    <p>Movie Fight is a website where user can campare two movie on bases of people-review, award won,nomiations,etc.It is a Fun website.
                    </p>
                    <span className='project-tech-stack'>
                        <img src={htmlImg} alt="html"/>
                        <img src={cssImg} alt="css"/>
                        <img src={jsImg} alt="javscript"/>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}
