import React, { Fragment } from 'react'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'
import Formation from './pages/Formation/Formation'
import Home from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'
import Footer from './pages/Footer/Footer'
import Navbar from './common/Navbar'
import { BsChevronDoubleUp } from 'react-icons/bs'

const App = () => {
    document.addEventListener('scroll', (e) => {
        if (window.scrollY !== 0) {
            document.querySelector('.swip-up').style.display = 'block'
        } else {
            document.querySelector('.swip-up').style.display = 'none'
        }
    });

    return (
        <Fragment>
            <div className='section-container'>
                <Home/>
                <Navbar/>
                <Experience/>
                <Formation/>
                <Skills/>
                <Contact/>
                {/* <Footer/> */}
            </div>


            <div className='swip-up'>
                <a href='#section-home'>
                    <BsChevronDoubleUp/>
                </a>
            </div>
        </Fragment>
    )
}

export default App