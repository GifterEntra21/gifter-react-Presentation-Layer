import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";
import { useState } from 'react';
import { GetUser } from "../services/token"




// let spinnerCss = {
//     display: "flex;",
//     position: "relative;",
//     top: "9rem;",
//     left: "3rem;",
//     border: "3px solid #DCDCDC;",
//     height: "25px;",
//     width: "25px;",
//     animation: "loading 2s cubic - bezier(0, .25, .7125, .1) infinite;"
// }

export default function Home() {

    const [spinner, setSpinner] = useState(true);

    const eventHandler = () => {
        setSpinner(false)
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

                <button className={styles.button} >Descobrir</button>
                <button oneClick={eventHandler}> aaa</button>
                <button onClick={() => console.log(spinner)}>    ver spinner </button>


            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>

        </div>

    )
}