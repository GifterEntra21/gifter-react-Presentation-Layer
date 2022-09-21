import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";

export default function Presente() {
    return (

        <div className={style.wrapper}>
            <Header />

            <div className={style.cardWrapper}>
                
                <Card title='Luminaria One Piece'
                    imageurl='https://m.media-amazon.com/images/I/81fvNmmrd3L._AC_SX522_.jpg'
                    body='Luminaria LED 3D, com 7 cores. Inclui: Cabo USB, uma base e uma luminária.'
                />

                <Card title='Suplemento BIOMAXX'
                    imageurl='https://melcoprol.com.br/images/produtos/Biomaxx-60caps-550mg.jpg'
                    body='Suplemento para usar na academia.' />
                
                <Card title='Bonecos Genshin Impact'
                    imageurl='https://cf.shopee.com.br/file/dff3fda1eca63b45077cc3dbc809781e'
                    body='Bonecos de pelúcia Genshin Impact - Coleção Completa'
                    link="https://shopee.com.br/product/570256376/16881347658?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_18112960000&af_sub_siteid=XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ&af_viewthrough_lookback=1d&c=-&is_retargeting=true&pid=affiliates&utm_campaign=-&utm_content=XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ&utm_medium=affiliates&utm_source=an_18112960000&utm_term=7q1arjw3gkb9XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ" />

                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}