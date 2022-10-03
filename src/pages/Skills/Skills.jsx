
import nodejs from '../../../public/nodejs.png'
import vuejs from '../../../public/vuejs.png'
import Flickity from 'react-flickity-component'
import './Skills.css'


import React, { Fragment } from 'react'

export const Skills = () => {

    const skills = [
        { id: 1, item: nodejs },
        { id: 2, item: vuejs },
    ]

    const flickityOptions = {
        initialIndex: 2
    }

    return (
        <div id='section-skills'>
            {
                skills.map(({ id, item }) => (
                    <div key={id}>
                        <div>
                            <img src={item} alt="nodejs" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
