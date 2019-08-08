import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import githublogo from '../../../images/github-logo.svg'
import linkedinlogo from '../../../images/linkedin-logo.svg'
import twitterlogo from '../../../images/twitter-logo.svg'
import emaillogo from '../../../images/email-logo.svg'
import JiggleDiv from '../utils/JiggleDiv'

import './HomePage.css'

const HomePage = (props) => {
    return (
        <div className='home-page'>
            {/* <JiggleDiv> */}
            <div className='content'>
                {/* <div className='name'>chai palaka</div> */}
                {/* <div className='social-links'>
                        <SocialLink name='github' link='https://github.com/cpalaka' logo={githublogo} />
                        <SocialLink name='linkedin' link='https://www.linkedin.com/in/cpalaka/' logo={linkedinlogo} />
                        <SocialLink name='twitter' link='https://twitter.com/sincosan' logo={twitterlogo} />
                        <SocialLink name='email' link='mailto:cpalaka@gmail.com' logo={emaillogo} />
                    </div> */}
            </div>
            {/* </JiggleDiv> */}
            
        </div>
    )
}

const SocialLink = (props) =>
    <a href={props.link} className='link'>
        <img className='logo' src={props.logo} alt={props.name} />
    </a>

export default HomePage