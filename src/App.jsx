import React, { Fragment } from 'react'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Footer from './pages/Footer/Footer'
import Navbar from './common/Navbar'
import { BsChevronDoubleUp } from 'react-icons/bs'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Mision from './pages/Mision/Mision'
import Vision from './pages/Vision/Vision'

const App = () => {
    // document.addEventListener('scroll', (e) => {
    //     if (window.scrollY >= 200) {
    //         document.querySelector('.swip-up').style.display = 'block'
    //     } else {
    //         document.querySelector('.swip-up').style.display = 'none'
    //     }
    // });

    return (
        <Fragment>
            {/* <div className='section-container'> */}
                {/* <Navbar/> */}
                <Home/>
                <About/>
                <Mision/>
                <Vision/>
                <Services/>
                <Contact/>
                <Footer/>
            {/* </div> */}


            <div className='swip-up'>
                <a href='#section-home'>
                    <BsChevronDoubleUp/>
                </a>
            </div>
        </Fragment>
    )
}

export default App