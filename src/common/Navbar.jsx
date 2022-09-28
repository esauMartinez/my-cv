import React, { Fragment, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
    const [isShowSidenav, setIsShowSidenav] = useState(true)
    const paths = [
        { id:'1', name: 'Inicio', path: '#section-home' },
        { id:'2', name: 'Experiencia', path: '#section-experience' },
        { id:'3', name: 'Formacion', path: '#section-formation' },
        { id:'4', name: 'Competencias', path: '#section-skills' },
        { id:'5', name: 'Contacto', path: '#section-contact' },
    ]

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