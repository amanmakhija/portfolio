import React from 'react'
import "./Skills.css"

export default function Skills({ info }) {
    return (
        <div className='skillsImageContainer'>
            <img className='skillsImage' src={info.url} alt={info.name} />
        </div>
    )
}
