import style from "./Erro.module.css"
import Header from "../Components/Header/Header";

export default function Erro() {
    return (
        <div className={style.Found}>
            <Header />
            <div>
                <p className={style.Title}>Erro!</p>
            </div>

            <div>
                <p className={style.phrase}>Recarregue a página por favor!</p>
            </div>
        </div>
    )
}