import React from 'react'
import './Card.css'


function Card({title,imageurl,body, link}) {
    return (
        <div  className='card-container'>
            <div className="image-container">
                <img src={imageurl} alt='' />
            </div>
            <div className="card-content">
                <div className="Card-Title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                    
                </div>
            </div>

            <div className="btn" >
                <button>
                    <a href={link} target="_blank">
                    Ver mais
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Card;
