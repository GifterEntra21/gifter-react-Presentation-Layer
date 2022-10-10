import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { GetAllGifts } from "../services/Api/ApiMethods"



export default function Presente() {

    const [cards, SetCards] = useState();

    const GenerateCards = async () => {
        const gifts = [await GetAllGifts()]

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