import './Header.css';
import logo from "../../images/logo.png";


export default function Header() {
    return (
        <div class="logo">
            <nav>
                <ul>

                    <li><a href="/"><img src={logo} alt="logo.png" /></a></li>
                    <ul>
                        <li><a href="/presente" className="style">Categorias</a></li>
                        <li><a href="/sobre" className="style">Sobre nós</a></li>
                    </ul>
                </ul>
            </nav>

        </div>
    )
}