
import nodejs from '../../../public/nodejs.png'
import vuejs from '../../../public/vuejs.png'
import './Skills.css'


import React from 'react'

export const Skills = () => {

    const skills = [
        { id: 1, item: nodejs },
        { id: 2, item: vuejs },
    ]

    return (
        <div id='section-skills'>
            <div className='container'>
                <div className='row'>
                    {
                        skills.map(({ id, item }) => (
                            <div className='col-lg-3 col-md-3 col-sm-6' key={id}>
                                <div className='card'>
                                    <img src={item} alt="nodejs" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
