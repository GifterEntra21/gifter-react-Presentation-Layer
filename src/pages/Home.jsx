import styles from './Home.module.css';
import simbolo from "../images/simbolo.png";



export default function Home() {
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
                <div className={styles.spinner}></div>
                <div className={styles.waiting}>Carregando...</div>
            </div>
            <div className={styles.photo}>
                <img src={simbolo} alt="present.png" />
            </div>

        </div>

    )
}