import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Home() {

    const [inputData, setInputData] = useState("")
    const [inputError, setInputError] = useState(false)
    const navigate = useNavigate();
    
    function handleSubmit() {
        setInputError(false);
        if (inputData === "") {
            setInputError(true);
        } else {
            await Swal.fire({
                title:"Ops! Algo não correu bem",
                html: 'Infelizmente o projeto tem recursos limitados, nossa assinatura Azure acabou por isso não será possível realizar o procedimento',
                confirmButtonText:'Tentar novamente!',
                icon:'warning'
            })    
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
                    placeholder='@nomedoperfil'
                    onKeyUp={(e) => { e.code === "Enter" ? handleSubmit() : console.log() }}
                    onChange={(e) => { setInputData(e.target.value) }}
                    className={styles.input} style={inputError ? {"border-color":"red"} : {}}
                />

                <button className={styles.button} onClick={() => { handleSubmit() }}>Descobrir</button>
            </div>
            <p className={inputError ? styles.message : styles.aaaaa} style={inputError ? {} : { display: "none" }}>Por favor, digite um perfil.</p>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>
        </div>
    )
}
