import React, { Fragment } from 'react'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'
import Formation from './pages/Formation/Formation'
import Home from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'
import Footer from './pages/Footer/Footer'
import Navbar from './common/Navbar'

const App = () => {
    return (
        <Fragment>
            <div className='section-container'>
                <Home/>
                <Navbar/>
                <Experience/>
                <Formation/>
                <Skills/>
                <Contact/>
            </div>
        </Fragment>
    )
}

export default App