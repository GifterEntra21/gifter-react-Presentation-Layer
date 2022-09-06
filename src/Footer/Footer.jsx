import styles from "./Footer.module.css"
import Marco from "../images/Marco.png"
import Matheus from "../images/Matheus.png"
import VitorA from "../images/VitorA.png"
import VitorH from "../images/VitorH.png"
import { TiSocialLinkedin } from "react-icons/ti"
import { AiFillGithub } from "react-icons/ai"
import { DiGithubFull } from "react-icons/di"


export default function Footers() {
    const linkMatheus = "https://www.linkedin.com/in/matheus-longen-2a413b247/";
    const linkVitorA = "https://br.linkedin.com/in/vitor-pfiffer";
    const linkVitorH = "https://br.linkedin.com/in/vitorfauste";
    const linkMarco = "https://br.linkedin.com/in/marcoantoniofurtado";
    const linkGitHub ="https://github.com/GifterEntra21/Gifter";
    const icons = { color: "white", fontSize: 60 }
    const hub = { color: "white", fontSize: 190 }
    return (

        <footer>

            <div className={styles.innerFooter}>

                <div className={styles.title}>
                    Sobre nós
                </div>

                <div className={styles.photoMembers}>

                    <a href={linkMarco}target="_blank"><img src={Marco} /></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Marco</h5>
                    </div>

                    <a href={linkMatheus} target="_blank"><img src={Matheus} /></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Matheus</h5>
                    </div>

                    <a href={linkVitorA} target="_blank"><img src={VitorA} /></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Vitor A.</h5>
                    </div>

                    <a href={linkVitorH} target="_blank" ><img src={VitorH} /></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Vitor H.</h5>
                    </div>

                    <div className={styles.git}>
                      <a href={linkGitHub} target="_blank"><AiFillGithub style={hub} /></a>  
                        <DiGithubFull style={hub} />
                    </div>

                    <div className={styles.line} />
                </div>
            </div>
        </footer>
    )
}