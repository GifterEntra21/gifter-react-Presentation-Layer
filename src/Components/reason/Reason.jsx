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

                <div className={style.PP}>
                    <AiOutlineGift style={icons} className={style.present} />
                    <h5 className={style.textP} >
                        Recomendações precisas para o presente correto.
                    </h5>
                </div>

                <div className={style.MH}>
                    <AiOutlineUnorderedList style={icons} className={style.list} />
                    <h5 className={style.textL}>
                        Uma lista com diversas opções para você escolher.
                    </h5>
                </div>

                <div className={style.ST}>
                    <AiOutlineStar style={icons} className={style.star} />
                    <h5 className={style.textS}>
                        Presentes personalizados de acordo com cada perfil.
                    </h5>
                </div>
            </div>

        </div>

    )
}