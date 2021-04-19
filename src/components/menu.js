import React from 'react'
import '../App.css'
import './menu.css'
import './cards.css'
import { Button } from './button'
import { FaPlayCircle } from 'react-icons/fa'


function Menu() {
    return (
        <div className="container">
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted  /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className="cont-btn">
                <Button className="btn" buttonStye='btn-outline' buttonSize='btn-large'>
                    Get Started
                </Button>
                <Button className="btn" buttonStye='btn-primary' buttonSize='btn-large'>
                    Watch trailer <FaPlayCircle className="icon"/>
                </Button>
            </div>
            
            {/* <img src="/image/img-home.jpg" alt=""/> */}
            {/* <div  styles={{ backgroundImage:`url(/images/img-home.jpg)`}}></div> */}
        </div>
    )
}

export default Menu
/* Adding image file in js, we need to save the image file in oublic folder*/
