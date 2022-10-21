import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GetGifts } from "../services/Api/ApiMethods"
import CardEs from "../Components/Card/CardEsqueleton";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import Swal from 'sweetalert2'
export default function PresentesRecomendados() {
    const { profile } = useParams();
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const listEsq = numbers.map((esq) => <CardEs key={esq} />)
    const [cards, SetCards] = useState([listEsq]);
    const [completed, setCompleted] = useState(1);
    const navigate = useNavigate();


    useEffect(() => {
        let timer;
        if (completed < 100 && completed !== 0) {
            timer = setTimeout(() => {
                setCompleted(completed + 1)
            }, 1000);
        }
        return() => {
            clearTimeout(timer)
        }
    }, [completed]);

    useEffect(() => {
        GenerateCards();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const GenerateCards = async () => {

        if (profile === null) {
            await Swal.fire({
                title:"Erro no servidor",
                html:"Lembre-se que o perfil deve ser público e ter postagens",
                icon:'error'

            })          
            return navigate('/');
        }

        const gifts = [await GetGifts(profile)]
        try {
            const giftsObj = JSON.parse(gifts)

            const listItems = giftsObj.map((gift) =>
                <Card key={gift.id} id={gift.id} title={gift.name} imageurl={gift.image} link={gift.shopURL}></Card>
            );            
            setCompleted(100)
            SetCards(listItems);
        } catch (error) {
            setCompleted(0);
            await Swal.fire({
                title:"Erro interno no servidor",
                html:"Lembre-se que o perfil deve ser público e ter postagens",
                icon:'error'

            })          
            return navigate('/');
        }

    }




    return (

        <div className={style.wrapper}>
            <Header />
            <div className={style.cardWrapper}>
                <ProgressBar completed={completed} />
                {cards}
            </div>
        </div>
    )
}