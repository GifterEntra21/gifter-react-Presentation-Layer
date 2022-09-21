import React from 'react'
import styles from './Card.module.css'


function Card({ title, imageurl, link }) {
    return (
        <a src={link} alt=''>
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
