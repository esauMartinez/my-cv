import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='section' id='section-contact'>
            <div className='container mt-5'>
                <h2 className='text-center mb-3'>Contacto</h2>
                <form action=''>
                    <div className='row'>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input type="email" className='form-control' placeholder='nombre'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Correo</label>
                            <input type="email" className='form-control' placeholder="email@example.com" />
                        </div>
                        <div className='mb-3'>
                            <label  className='form-label'>Mensaje</label>
                            <textarea className='form-control' rows="5"></textarea>
                        </div>
                        <div className='mb-3 d-flex justify-content-end'>
                            <button className='btn btn-primary w-25'>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact