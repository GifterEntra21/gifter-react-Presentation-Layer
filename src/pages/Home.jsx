import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { GetUser } from '../services/Api/ApiMethods'
import { useEffect } from 'react';

export default function Home() {
    const [spinner, setSpinner] = useState(false);

    
    useEffect(() => {

        console.log("asd")
    }, []);

    const eventHandler = () => {
        GetUser()
        setSpinner(spinner ? false : true)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <h2 className={styles.title}>A solução perfeita
                    para presentear
                </h2>
            </div>
            <div>
                <h5 className={styles.text}>
                    O Gifter te recomenda produtos
                    baseados no perfil do Instagram de
                    quem você deseja presentear
                </h5>
            </div>
            <div>
                <h5 className={styles.amount}>
                    Qual o link do perfil do presenteado?
                </h5>
                <input placeholder='instagram.com/giftersolutions' className={styles.input} />

                <button className={styles.button} onClick={() => eventHandler()} disabled={spinner ? true : false} >Descobrir</button>
                <div className={spinner ? styles.spinner : styles.aaaaaaaa}></div>
                <a href='/presente'><button className={styles.tt}>cards</button></a>
            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}