import React from 'react'

function Card({text, image, name, genre}) {
    return (
        <div className="card">
            <div className="card__wrap">
                <p className="card__text">
                    {text}
                </p>
                <div className="name__genre">
                    <p className="card__name">{name}</p>
                    <p className="card__genre">{genre}</p>
                </div>
            </div>
            <img src={image} alt="face" className="card__pic" />
        </div>
    )
}

export default Card
