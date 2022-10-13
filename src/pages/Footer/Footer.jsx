import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='left-footer'>
                <h5 className='name'>RECAWI</h5>
                <h6>&copy;Derechos reservados</h6>


                <h5>Nuestros clientes</h5>
                <h6>LM Corp</h6>
                <h6>TSM Connect</h6>
                <h6>Fletes Rapidos de Saltillo</h6>
            </div>

            <div className='right-footer'>
                <p>Facebook</p>
                {/* <p>Instagram</p>
                <p>Linkedin</p> */}
                <p>WhatsApp</p>
            </div>

        </div>
    )
}

export default Footer