import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
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

    document.addEventListener('scroll', (e) => {
        if (window.scrollY !== 0) {
            console.log(window.scrollY)
            document.querySelector('.my-navbar').style.backgroundColor = 'rgb(61, 61, 61) !important';
        } else {
            document.querySelector('.my-navbar').style.backgroundColor = '';
        }
    });

    return (
        <Fragment>            
            <div className='my-navbar'>
                <div className='container-fluid d-flex justify-content-end'>
                    <button className='my-navbar-toggler'>
                        <AiOutlineMenu />
                    </button>
                </div>

                <ul className='my-navbar-collapse'>                    
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
        </Fragment>
    )
}

export default Navbar