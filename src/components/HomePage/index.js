import React from 'react'
import { Link } from 'react-router-dom'
import githublogo from '../../../images/github-logo.svg'
import linkedinlogo from '../../../images/linkedin-logo.svg'
import twitterlogo from '../../../images/twitter-logo.svg'
import emaillogo from '../../../images/email-logo.svg'
import './HomePage.css'

const HomePage = (props) => {
    return (
        <div className='home-page'>
            <div className='content'>
                <div className='name'>chai palaka</div>
                <div className='social-links'>
                    <SocialLink name='github' link='https://github.com/cpalaka' logo={githublogo} />
                    <SocialLink name='linkedin' link='https://www.linkedin.com/in/cpalaka/' logo={linkedinlogo} />
                    <SocialLink name='twitter' link='https://twitter.com/sincosan' logo={twitterlogo} />
                    <SocialLink name='email' link='mailto:cpalak@gmail.com' logo={emaillogo} />
                </div>
            </div>
            {/* <Link to='/blog'>Blog</Link> */}
        </div>
    )
}

const SocialLink = (props) => 
    <a href={props.link} className='link'>
        <img className='logo' src={props.logo} alt={props.name} />
    </a>

export default HomePage