import React, { Fragment, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [isShowSidenav, setIsShowSidenav] = useState(true)
    const paths = [
        { id:'1', name: 'Inicio', path: '#section-home' },
        { id:'2', name: 'Nosotros', path: '#section-about' },
        { id:'3', name: 'Mision y Vision', path: '#section-mision' },
        { id:'4', name: 'Servicios', path: '#section-services' },
        { id:'5', name: 'Contacto', path: '#section-contact' },
    ]

    document.addEventListener('scroll', (e) => {
        if (window.scrollY !== 0) {
            document.querySelector('.my-navbar').style.backgroundColor = ''
            // document.querySelector('.my-navbar').style.backgroundColor = 'hsl(0deg 0% 42%)'
        } else {
            document.querySelector('.my-navbar').style.backgroundColor = ''
        }
    });

    const showMenu = () => {
        if (isShowSidenav) {
            document.querySelector('.full-menu').style.display = 'block'
        } else {
            document.querySelector('.full-menu').style.display = 'none'
        }

        setIsShowSidenav(!isShowSidenav)
    }

    return (
        <Fragment>            
            <div className='my-navbar'>
                <ul className='my-navbar-menu'>                    
                    {
                        paths.map(({ id, name, path }) => (
                            <li className='my-navbar-list' key={id}>
                                <a className='my-navbar-link' href={path}>
                                    { name }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='my-navbar-toggler'>
                <button onClick={() => showMenu()}>
                    <AiOutlineMenu />
                </button>
            </div>
            
            <div className='full-menu'>
                <ul className='my-menu-full'>
                    {
                        paths.map(({ id, name, path }) => (
                            <li key={id}>
                                <a href={path} onClick={() => {showMenu()}}>
                                    { name }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar