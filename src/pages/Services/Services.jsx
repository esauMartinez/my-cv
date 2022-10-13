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
                <div className="tl-bg" id='tl-bg-development'></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Desarrollo</p>
                </div>
                <div className="tl-content">
                    <h1>Desarrollo de software</h1>
                    <p>
                        Desarrollo e implementacion de software a la medida. <br />
                        Solución para Timbrado de carta porte (ramo transportista). <br />
                        Hospedaje web. <br />
                        Renta de domino web. <br />
                    </p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg" id='tl-bg-support'></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Soporte</p>
                </div>
                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Soporte y administración de servidores</h1>
                    <p>
                        Soporte y administración de sitios web. <br />
                        Soporte a equipo de cómputo y de impresión. <br />
                        Venta de equipo de cómputo e impresión. <br />
                        Correo electrónico. <br />
                        Consumibles para impresora, pc, etc. <br />
                    </p>
                </div>
            </div>
            <div className="tl-item">
                <div className="tl-bg" id='tl-bg-instalation'></div>
                <div className="tl-year">
                    <p className="f2 heading--sanSerif">Instalación</p>
                </div>
                <div className="tl-content">
                    <h1 className="f3 text--accent ttu">Instalación de CCTV</h1>
                    <p>
                        Instalación de cableado estructurado.
                        Instalaciones de red.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services