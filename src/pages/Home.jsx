import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { GetUser } from '../services/Api/ApiMethods'


export default function Home() {

    const [spinner, setSpinner] = useState(false);
    const [waiting, setWaiting] = useState(false);

    const eventHandler = () => {
        GetUser()
        setSpinner(spinner ? false : true)
        setWaiting(waiting ? false : true)
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <h2 className={styles.title}>A solução perfeita
                    para presentear.
                </h2>
            </div>
            <div>
                <h5 className={styles.text}>
                    O Gifter te recomenda produtos
                    baseados no perfil do Instagram de
                    quem você deseja presentear.
                </h5>
            </div>
            <div>
                <h5 className={styles.amount}>
                    Qual o @ do perfil presenteado?
                </h5>
                <input placeholder='@NomeDoPerfil' className={styles.input} />

                <button className={styles.button} onClick={() => eventHandler()} style={spinner ? {display:"none"} : {}} >Descobrir</button>
                <div className={spinner ? styles.spinner : styles.aaaaaaaa}></div>
                <div className={waiting ? styles.waiting : styles.aaaaaaaa} style={waiting ? {} : {display:"none"}}>Isso pode levar alguns minutos...</div>
            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}