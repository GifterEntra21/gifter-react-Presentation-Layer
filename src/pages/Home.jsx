import styles from './Home.module.css'
import Header from "../Components/Header/Header";


export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.polygon}>

            </div>
            <h2>Não sabe o que dar de presente para alguém?</h2>
            <h2>Nós resolvemos seu problema!</h2>
            <p>
                <h5> Gifter é um software de recomendações de produtos baseados em redes
                    neurais capazes de analizar um perfil público di instagram e
                    caracterizá-lo em 3 pincipais categorias para serem cruzados com os
                    presentes cadastrados do sistema
                </h5>
            </p>


            <h5 className='AbaixoButton'>
                Insira o link do perfil do instagram de quem quer presentear
            </h5>

            <input placeholder='Instagram.com/giftersolutions' />
            <button>Presentear</button>
        </div>


    )
}