import './Header.css';
import logo from "../../images/logo.png";


export default function Header() {
    return (
        <div class="logo">
            <nav>
                <ul>

                    <li><a href="#"><img src={logo} alt="AAAAAAAAAAAAAAAAAAAAAAAA" /></a></li>
                    <ul>
                        <li><a href="#">Presentear</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </ul>
            </nav>

        </div>
    )
}