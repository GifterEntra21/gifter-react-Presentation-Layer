import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect, Redirect } from "react";
import { GetGifts } from "../services/Api/ApiMethods"


export default function PresentesRecomendados() {

    const [cards, SetCards] = useState();

    const GenerateCards = async () => {
        if (localStorage.getItem("profile") == null) {
            return <Redirect to="/erro" />
        }
        const gifts = [await GetGifts()]

        const giftsObj = JSON.parse(gifts)
        console.log(giftsObj)
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