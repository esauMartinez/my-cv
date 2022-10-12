import React, { useEffect } from 'react'
import Swiper, {
    SwiperPluginLazyload,
    SwiperPluginPagination
} from 'tiny-swiper'
import './Services.scss'

const Services = () => {
    return (
        // Desarrollo de software
        // Soporte y administración de sitios web
        // Instalación de CCTV
        // cableado estructurado
        // Venta y renta de equipo de cómputo
        // Soporte y administración de servidores
        // Venta y renta de equipo de impresión
        // Solución para Timbrado de carta porte (ramo transportista)
        // Facturación electrónica
        <section id='section-services' className="timeline">
            <div className="tl-item">
                <div className="tl-bg" style={{'background-image': 'url(../../../public/development.jpg)'}}></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Desarrollo</p>
                </div>
                <div className="tl-content">
                    <h1>Desarrollo de software</h1>
                    <p>
                        Desarrollo e implementacion de software a la medida <br />
                        Solución para Timbrado de carta porte (ramo transportista)
                    </p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg" style={{'background-image': 'url(../../../public/support.jpg)'}}></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Soporte</p>
                </div>
                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Soporte y administración de servidores</h1>
                    <p>
                        
                    </p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg" style={{'background-image': 'url(../../../public/cctv.jpg)'}}></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Instalación</p>
                </div>
                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Instalación de CCTV</h1>
                    <p>

                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services