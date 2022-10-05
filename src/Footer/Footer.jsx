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
    const linkGitHub = "https://github.com/GifterEntra21";
    const icons = { color: "white", fontSize: 60 }
    const hub = { color: "white", fontSize: 170 }
    return (

        <footer>

            <div className={styles.innerFooter}>

                <div id="footer">
                <div className={styles.title}>
                    Sobre nós
                </div>

                </div>

                <div className={styles.photoMembers}>
                    
                    <a href={linkMarco} rel="noreferrer noopener" target="_blank"><img src={Marco} alt=''/></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Marco</h5>
                    </div>

                    <a href={linkMatheus} rel="noreferrer noopener" target="_blank"><img src={Matheus} alt=''/></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Matheus</h5>
                    </div>

                    <a href={linkVitorA} rel="noreferrer noopener" target="_blank"><img src={VitorA} alt=''/></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Vitor A.</h5>
                    </div>

                    <a href={linkVitorH} rel="noreferrer noopener" target="_blank" ><img src={VitorH} alt=''/></a>
                    <div className={styles.iconsC}>
                        <TiSocialLinkedin style={icons} />
                    </div>
                    <div className={styles.names}>
                        <h5>Vitor H.</h5>
                    </div>
                    <div className={styles.git}>
                        <a href={linkGitHub} rel="noreferrer noopener" target="_blank"><AiFillGithub style={hub} /></a>
                        <a href={linkGitHub} rel="noreferrer noopener" target="_blank"><DiGithubFull style={hub} /></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}