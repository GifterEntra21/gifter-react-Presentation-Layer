import style from './Header.module.css';
import logo from "../../images/logo.png";

export default function Header() {
    let flag = false

    if (window.location.href === "https://gifter-e21.netlify.app/presente") {
      flag=true
    }
    return (
        <div className={style.logo}>
            <nav>
                <ul>
                    <li><a href="/"><img src={logo} alt="logo.png" /></a></li>
                    <ul>
                        <li><a href="/presente" className={style.pages}>Todos os produtos</a></li>
                        <li><a href="#footer" className={style.pages} style={flag ? {display: "none"} : {  }}>Sobre nós</a></li>
                    </ul>
                </ul>
            </nav>

        </div>
    )
}