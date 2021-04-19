import React from 'react'
import './footer.css'
import { FaCopy, FaCopyright, FaFacebook, FaGlobeAfrica, FaInstagram, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Button } from './button'


function Footer() {
    return (
        <>
            <div className="footer-container">
                <section className="footer-subscription">
                    <p>Join the Adventure newsletter to receive our best vacation details</p>
                    <p>you can Un-subscribe to any time.</p>
                    <div className="inputSection">
                        <form action="#">
                            <input type="text" className="footer_text" placeholder="Enter Your Email-Id" name="email" />
                            <Button buttonStye="btn-outline">Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className="footerLink">
                    <div className="footerLinkWrapper">
                        <div className="footerLinkItems">
                            <h2>About US</h2>
                            <Link to="/">How it Works</Link>
                            <Link to="/">How it Testimonials</Link>
                            <Link to="/">careers</Link>
                            <Link to="/">Investors</Link>
                            <Link to="/">Terms of Service</Link>
                        </div>
                        <div className="footerLinkItems">
                            <h2>Contact Us</h2>
                            <Link to="/">Contact</Link>
                            <Link to="/">Support</Link>
                            <Link to="/">Destination</Link>
                            <Link to="/">Sponsorship</Link>
                        </div>
                    </div>
                    <div className="footerLinkWrapper">
                        <div className="footerLinkItems">
                            <h2>Videos</h2>
                            <Link to="/">Submit Videos</Link>
                            <Link to="/">Ambassadors</Link>
                            <Link to="/">Agencies</Link>
                            <Link to="/">Influencer</Link>
                        </div>
                        <div className="footerLinkItems">
                            <h2>Social Media</h2>
                            <Link to="/">Instagram</Link>
                            <Link to="/">Facebook</Link>
                            <Link to="/">YouTube</Link>
                            <Link to="/">Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className="SocialMedia">
                    <div className="socialMediaContainer">
                        <div className="socialMediaWrap">
                            <Link to="/" className="Social-Logo">Travelling <FaGlobeAfrica/> </Link>
                        </div>
                        <small className="SocialMediaRIghts"> Travelling <FaCopyright/> 2021</small>
                        <div className="social-icon">
                            <Link to="/" className="socialMediaIcon" target='_blank' aria-label="Instagram" ><FaInstagram/> </Link>
                            <Link to="/" className="socialMediaIcon" target='_blank' aria-label="Facebook" ><FaFacebook/> </Link>
                            <Link to="/" className="socialMediaIcon" target='_blank' aria-label="Twitter" ><FaTwitter/> </Link>
                            <Link to="/" className="socialMediaIcon" target='_blank' aria-label="Reddit" ><FaReddit/> </Link>
                            <Link to="/" className="socialMediaIcon" target='_blank' aria-label="youtube" ><FaYoutube/> </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Footer;