import React from 'react'
import styles from './CardEsqueleton.module.css'


function CardEs() {

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.Image} />
                <div className={styles.Mega} />
                <p className={styles.text}></p>
            </div>
        </div>
    )
}

export default CardEs;
