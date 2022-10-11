
import node from '../../../public/node.png'
import vue from '../../../public/vue.png'
import html from '../../../public/html.png'
import angular from '../../../public/angular.png'
import bootstrap from '../../../public/bootstrap.png'
import css from '../../../public/css.png'
import docker from '../../../public/docker.png'
import github from '../../../public/github.png'
import javascript from '../../../public/javascript.png'
import python from '../../../public/python.png'
import react from '../../../public/react.png'
import ubuntu from '../../../public/ubuntu.png'
import windows from '../../../public/windows.png'


import './Skills.css'


import React, { Fragment } from 'react'

export const Skills = () => {

    const skills = [
        { id: 1, item: angular },
        { id: 2, item: bootstrap},
        { id: 3, item: node },
        { id: 4, item: vue },
        { id: 5, item: html },
        { id: 6, item: css },
        { id: 7, item: docker },
        { id: 8, item: github },
        { id: 9, item: javascript },
        { id: 10, item: python },
        { id: 11, item: react },
        { id: 12, item: ubuntu },
        { id: 13, item: windows },
    ]

    const flickityOptions = {
        initialIndex: 2
    }

    return (
        <div id='section-skills' className='container'>
            {
                skills.map(({ id, item }) => (
                    <div className='card-skill' key={id}>
                        <img src={item} alt="nodejs" />
                    </div>
                ))
            }
        </div>
    )
}
