import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Singers from './Singers';
import Albums from './Album';
import Home from './Home'


export default function NavBar() {
    return (
        <div>
            <nav>
                <a>Music Player</a>
                
                <div >
                    <div >

                            <Link ty
                            o="/"><a >Home</a></Link>
                            <br></br>
                            <Link to="/singers" ><a  >Singers</a></Link>
                            <br></br>
                            <Link to="/Album" ><a  >Albums</a></Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}