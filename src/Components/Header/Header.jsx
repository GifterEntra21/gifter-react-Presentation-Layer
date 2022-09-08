import style from './Header.module.css';
import logo from "../../images/logo.png";


export default function Header() {
    return (
        <div className={style.logo}>
            <nav>
                <ul>

                    <li><a href="/"><img src={logo} alt="logo.png" /></a></li>
                    <ul>
                        <li><a href="/presente" className={style.pages}>Categorias</a></li>
                        <li><a href="#Title" className={style.pages}>Sobre nós</a></li>
                    </ul>
                </ul>
            </nav>

        </div>
    )
}