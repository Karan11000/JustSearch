import React from 'react'
import "./Home.css"
import {Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <div>
                <nav className="navbar navbar-dark bg-dark ">
                    <span className="navbar-brand mb-0 h1 mx-auto">Just Serach</span>
                </nav>
            </div>
            <div className='background_image '>
            <div className="aboutMain background_features">
                <h1 className='about'>ABOUT US</h1>
                <p className='about-text'>We Provide Amazing Search Engine Facilities to the user. If you are a Dark Mode lover then we have amazing Dark Mode UI in the search Engine. We also Provide Storage Facilities to the User. If you want to know the path to your destination or Want to know the expected time to reach at your desired Destination then we also have Map feature, explore it out</p>
            </div>
            <div style={{width:"100%"}}>
            <div className="exploration">
                <h1>EXPLORE JUSTSEARCH FEATURES</h1>
                <div className='contain'>
                <Button className="buttonVal">
                <Link to="/searchengine"  className='small'>Search Engine</Link>
                </Button>
                <Button className="buttonVal">
                <Link to="/dashboard" className='small'>Drive</Link>
                </Button>
                <Button className="buttonVal">
                <Link to="/map" className='small'>Map</Link>
                </Button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
