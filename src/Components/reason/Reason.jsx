import style from './Reason.module.css'
import { AiOutlineGift } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineUnorderedList } from 'react-icons/ai'

export default function reasons() {
    const icons = { color: "#c81b48", fontSize: 120 }
    return (

        <div className={style.rectangle}>
            <div className={style.title}>
                <h2 >
                    Por que usar Gifter?
                </h2>
            </div>
            <div className={style.iconsWrapper}>

                <div>
                    <AiOutlineGift style={icons} className={style.present} />
                    <h5 className={style.iconP} >
                        Recomendações precisas sobre qual item comprar para a pessoa.
                    </h5>
                </div>

                <div>
                    <AiOutlineUnorderedList style={icons} className={style.list} />
                    <h5 className={style.iconL}>
                        Uma lista com diversas opções para você escolher.
                    </h5>
                </div>

                <div>
                    <AiOutlineStar style={icons} className={style.star} />
                    <h5 className={style.iconS}>
                        Presentes mais personalizados de acordo com cada perfil.
                    </h5>
                </div>
            </div>

        </div>

    )
}