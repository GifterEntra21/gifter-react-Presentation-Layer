import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';



export default function Home() {

    const [inputData, setInputData] = useState("")
    const [inputError, setInputError] = useState(false)

  
    function handleSubmit() {
        setInputError(false);
        if (inputData === "") {
            setInputError(true);
        } else {
            window.location.href = "http://localhost:3000/reco/" + inputData
        };
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
                <input
                    required
                    tabIndex={1}
                    placeholder='@NomeDoPerfil'
                    onKeyUp={(e) => { e.code === "Enter" ? handleSubmit() : console.log() }}
                    onChange={(e) => { setInputData(e.target.value) }}
                    className={styles.input} style={inputError ? {"border-color":"red"} : {}}
                />

                <button className={styles.button} onClick={() => { handleSubmit() }}>Descobrir</button>
            </div>
            <p className={inputError ? styles.message : styles.aaaaa} style={inputError ? {} : { display: "none" }}>Por favor digite um perfil.</p>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}