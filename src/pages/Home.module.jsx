import styles from './Home.module.css'
import Header from "../Components/Header/Header";
import Footer from '../Footer/Footer';



export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Header />

                    <div>
                    <h2>A solução perfeita<br />
                        para presenetar
                    </h2>

                    <p>
                        <h5>
                            O Gifter te recomenda produtos<br />
                            baseados no perfil do Instagram de<br />
                            quem você deseja presentear<br />
                        </h5>
                    </p>
                    


                    <h5 className="separador">
                        Qual o link do perfil do presenteado?
                    </h5>

                    <input placeholder='Instagram.com/giftersolutions' />
                    <button>Descobrir</button>
                    </div>

                    

                    <Footer />
                </div>
                
    )
}