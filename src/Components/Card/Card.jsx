import React from 'react'
import styles from './Card.module.css'
import {SetClicks } from "../../services/Api/ApiMethods"

function Card({ title, imageurl, link,id }) {

    const clicks = async (id)=> {
        await SetClicks(id)
        console.log("produto clicado: "+ title )
    }

    return (        
        <a href={link} alt='' target="_blank" rel="noreferrer noopener" onClick = {() => clicks(id)}>
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <div className={styles.Image}>
                        <img src={imageurl} alt='' />
                    </div>
                    <div className={styles.Mega}>
                        <div className={styles.Title}>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </a >
    )
}

export default Card;
