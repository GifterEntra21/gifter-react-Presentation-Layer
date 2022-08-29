import Footer from "./Footer.css";
import lk from "../images/lk.png"


export default function Footers() {
    const linkMatheus ="https://www.linkedin.com/in/matheus-longen-2a413b247/";
    const linkVitorA = "https://br.linkedin.com/in/vitor-pfiffer";
    const linkVitorH = "https://br.linkedin.com/in/vitorfauste";
    const linkMarco = "https://br.linkedin.com/in/marcoantoniofurtado";

    return(

        <footer className="footer">


            <div className="inner-footer">

            <div className="quick-links">
                    <ul>
                        <li className="quick-items"><a>Marco A.</a></li>
                        <li className="quick-items"><a>Matheus</a></li>
                        <li className="quick-items"><a>Vitor A.</a></li>
                        <li className="quick-items"><a>Vitor H.</a></li>
                    </ul>
                </div>

                <div className="social-items">
                    <ul>
                    <li className="items"><a href={linkMarco}><img src={lk} className="ggg" /></a></li>
                    <li className="items"><a href={linkMatheus}><img src={lk} className="ggg" /></a></li>
                    <li className="items"><a href={linkVitorA}><img src={lk} className="ggg" /></a></li>
                    <li className="items"><a href={linkVitorH}><img src={lk} className="ggg" /></a></li>
                    </ul>
                </div>
                
            </div>
        </footer>
    )
}