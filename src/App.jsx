import React, { Fragment } from 'react'
import Contact from './pages/Contact/Contact'
import Experience from './pages/Experience/Experience'
import Home from './pages/Home/Home'
import Footer from './pages/Footer/Footer'
import Navbar from './common/Navbar'
import { BsChevronDoubleUp } from 'react-icons/bs'
import Services from './pages/Services/Services'

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
                <Navbar/>
                <Home/>
                <Services/>
                {/* <Experience/> */}
                {/* <Formation/> */}
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