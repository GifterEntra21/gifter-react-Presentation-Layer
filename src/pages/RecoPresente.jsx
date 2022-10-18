import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GetGifts } from "../services/Api/ApiMethods"
import CardEs from "../Components/Card/CardEsqueleton";

export default function PresentesRecomendados() {
    const { profile } = useParams();
    const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15];
    const listEsq = numbers.map((esq) => <CardEs key={esq}/>)
    const [cards, SetCards] = useState([listEsq]);
    const navigate = useNavigate();

    const GenerateCards = async () => {

        if (profile === null) {
            navigate('/');
        }

        const gifts = [await GetGifts(profile)]
        try {
            const giftsObj = JSON.parse(gifts)

            const listItems = giftsObj.map((gift) =>
                <Card key={gift.id} id={gift.id} title={gift.name} imageurl={gift.image} link={gift.shopURL}></Card>
            );
    
            SetCards(listItems);
        } catch (error) {
            
            alert("Erro no servidor, o perfil deve ter postagens públicas")
            return navigate('/');
        }
       
    }


    useEffect(() => {
        GenerateCards();
    }, []);

    return (

        <div className={style.wrapper}>
            <Header />
            <div className={style.cardWrapper}>
                {cards}
            </div>
        </div>
    )
}