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

    document.addEventListener('scroll', (e) => {
        const pageWidth  = document.documentElement.scrollWidth;
        if (pageWidth >= 900) {
            if (window.scrollY !== 0) {
                document
                    .querySelector('.my-navbar')
                    .style.backgroundColor = '#9090906e';
            } else {
                document
                    .querySelector('.my-navbar')
                    .style.backgroundColor = '';
            }
        }
    });

    const showMenu = () => {
        if (isShowSidenav) {
            document.querySelector('.my-navbar').classList.add('my-navbar-movil')
            document.querySelector('.my-navbar').classList.remove('my-navbar')
            document.querySelector('.my-navbar-collapse').classList.add('my-navbar-collapse-movil')
            document.querySelector('.my-navbar-collapse').classList.remove('my-navbar-collapse')

            document.querySelectorAll('.my-navbar-link').forEach(x => {
                x.classList.add('my-navbar-link-movil')
            })

            document.querySelectorAll('.my-navbar-link').forEach(x => {
                x.classList.remove('my-navbar-link')
            })

            document.body.style.overflow = 'hidden'

            document.querySelector('.back-navbar').style.display = 'block'
        } else {
            document.querySelector('.my-navbar-movil').classList.add('my-navbar')
            document.querySelector('.my-navbar-movil').classList.remove('my-navbar-movil')
            document.querySelector('.my-navbar-collapse-movil').classList.add('my-navbar-collapse')
            document.querySelector('.my-navbar-collapse-movil').classList.remove('my-navbar-collapse-movil')
            
            document.querySelectorAll('.my-navbar-link-movil').forEach(x => {
                x.classList.add('my-navbar-link')
            })

            document.querySelectorAll('.my-navbar-link-movil').forEach(x => {
                x.classList.remove('my-navbar-link-movil')
            })

            document.body.style.overflow = 'auto'
            document.querySelector('.back-navbar').style.display = 'none'
        }

        setIsShowSidenav(!isShowSidenav)
    }

    return (
        <Fragment>            
            <div className='my-navbar'>

                <div className='container-fluid d-flex justify-content-end'>
                    <button className='my-navbar-toggler' onClick={() => showMenu()}>
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
            
            <div className='back-navbar'></div>
        </Fragment>
    )
}

export default Navbar