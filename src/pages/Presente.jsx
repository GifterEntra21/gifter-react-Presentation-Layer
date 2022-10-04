import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { GetUser } from "../services/Api/ApiMethods"



export default function Presente() {

    const [cards, SetCards] = useState();

    const asd = async () => {
        const numbers = [await GetUser()]

        const vasco = JSON.parse(numbers)
        console.log(vasco)
        const listItems = vasco.map((number) =>
            <Card key={number.id} title={number.name} imageurl={number.image} link={number.shopURL}></Card>
        );

        SetCards(listItems);
    }

    useEffect(() => {
        asd();
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