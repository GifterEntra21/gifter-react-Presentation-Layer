import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    const [inputData, setInputData] = useState("")

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
                    <button className={styles.button}>Descobrir</button>
                </Link>
            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}