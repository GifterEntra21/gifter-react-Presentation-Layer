import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { GetGifts } from "../services/Api/ApiMethods"

export default function PresentesRecomendados() {
    const { profile } = useParams();
    const [cards, SetCards] = useState();
    const navigate = useNavigate();
    const GenerateCards = async () => {


        if (profile === null) {
            return navigate('/erro');
        }

        const gifts = [await GetGifts(profile)]


        const giftsObj = JSON.parse(gifts)

        const listItems = giftsObj.map((gift) =>
            <Card key={gift.id} title={gift.name} imageurl={gift.image} link={gift.shopURL}></Card>
        );

        SetCards(listItems);
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