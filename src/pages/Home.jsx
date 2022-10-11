import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    const [spinner, setSpinner] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [inputData, setInputData] = useState("")

    const eventHandler = () => {
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
                <input placeholder='@NomeDoPerfil' onChange={(e) => { setInputData(e.target.value) }} className={styles.input} />

                <Link to={"/reco/" + inputData}>
                    <button className={styles.button} onClick={() => eventHandler()} style={spinner ? { display: "none" } : {}} >Descobrir</button>
                </Link>
                <div className={spinner ? styles.spinner : styles.aaaaaaaa}></div>
                <div className={waiting ? styles.waiting : styles.aaaaaaaa} style={waiting ? {} : { display: "none" }}>Isso pode levar alguns minutos...</div>
            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}