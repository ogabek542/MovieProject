import React from 'react'
import "./footer.scss"
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin,} from "react-icons/fa"
import ContentWrapper from '../contentWrapper/ContentWrapper'



const Footer = () => {
  return (
    <footer className='footer'>
        <ContentWrapper>
            <ul className="menuItems">
                <li className="menuItem">Terms of Us</li>
                <li className="menuItem">Privacy-Policy</li>
                <li className="menuItem">About</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">FAQ</li>
            </ul>
            <div className="infoText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nemo fuga distinctio. Aliquam, tenetur ab expedita minima hic accusamus voluptatum incidunt nihil neque recusandae ducimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus commodi consectetur.
            </div>
            <div className="socialIcons">
                <span className="icon"><FaFacebookF/></span>
                <span className="icon"><FaInstagram/></span>
                <span className="icon"><FaTwitter/></span>
                <span className="icon"><FaLinkedin/></span>
            </div>
        </ContentWrapper>
    </footer>
  )
}

export default Footer