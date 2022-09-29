import React from 'react'
import './Experience.css'

const Experience = () => {
    const experiencia = [
        {
            id: 1,
            title: 'CFE',
            date: 'agosto 2016 — diciembre 2016',
            description: `Desarrollo de un sistema web en tiempo real para la supervisión de 
            trabajo de los ejecutivos de la CFE en el cual se utilizaron las tecnologías 
            como NodeJs para el back-end y jQuery para el front-end con la base 
            de datos MongoDB y para el diseño de las vistas se usó el framework 
            de diseño Bootstrap 4.`
        },
        {
            id: 2,
            title: 'TSM Connect',
            date: 'jun 2018 — actualidad',
            description: `Desarrollo de un sistema web de logística en el cual se implementó C# 
            para el consumo de una base de datos con el motor SQL server, tambien 
            se creó un API escrita en NodeJs para el consumo de un servicio de GPS 
            y envio de datos en tiempo real y se usó Angular para el front-end y 
            Bootstrap 4 para el diseño de las vistas`
        },
        {
            id: 3,
            title: 'TSM Connect',
            date: 'jun 2018 — actualidad',
            description: `Desarrollo de un sistema web de logística en el cual se implementó C# 
            para el consumo de una base de datos con el motor SQL server, tambien 
            se creó un API escrita en NodeJs para el consumo de un servicio de GPS 
            y envio de datos en tiempo real y se usó Angular para el front-end y 
            Bootstrap 4 para el diseño de las vistas`
        },
        {
            id: 4,
            title: 'TSM Connect',
            date: 'jun 2018 — actualidad',
            description: `Desarrollo de un sistema web de logística en el cual se implementó C# 
            para el consumo de una base de datos con el motor SQL server, tambien 
            se creó un API escrita en NodeJs para el consumo de un servicio de GPS 
            y envio de datos en tiempo real y se usó Angular para el front-end y 
            Bootstrap 4 para el diseño de las vistas`
        }


    ]



    return (
        <div className='section' id='section-experience'>
            <div className='container'>
                <div className='row'>
                    {
                        experiencia.map(({ id, title, date, description }) => (
                            <div className='col-lg-4' key={id}>
                                <div className='my-card'>
                                    <div className='my-card-header'>
                                        <h3>{ title }</h3>
                                    </div>
                                    <div className='my-card-body'>
                                        <p>
                                            { description }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience