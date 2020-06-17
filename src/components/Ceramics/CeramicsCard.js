import React from 'react'

export default function CeramicsCard({title, imgUrl, description}) {
    return (
        <div className="card">
            <img className="card__image" alt="placeholder" src={imgUrl}/>
            <p className="card__title">{title}</p>
            <p className="card__subtitle">{description}</p>
        </div>
    )
}
