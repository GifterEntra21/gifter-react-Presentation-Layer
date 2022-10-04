import React from "react";
import Card from "../Components/Card/Card";
import style from "./Presente.module.css"
import Header from "../Components/Header/Header";
import { useState, useEffect } from "react";
import { GetUser } from "../services/Api/ApiMethods"



export default function Presente() {
    //name //shopURL //image


    const [cards, SetCards] = useState();

    const asd = async () => {
        const numbers = [await GetUser()]

        const vasco = JSON.parse(numbers)
        console.log(vasco)
        const listItems = vasco.map((number) =>
            <Card key={number.id} title={number.username}> </Card>
        );

        SetCards(listItems);
    }

    useEffect(() => {

        console.log("asd")

        asd();
    }, []);


    return (

        <div className={style.wrapper}>
            <Header />

            <div className={style.cardWrapper}>
                {/* <button onClick={() => setTeste(teste ? false : true)}>aaaaaaaaaa</button> */}
                <ul>{cards}</ul>
                <Card title='Suplemento BIOMAXX'
                    imageurl='https://melcoprol.com.br/images/produtos/Biomaxx-60caps-550mg.jpg'
                />

                <Card title='Bonecos Genshin Impact'
                    imageurl='https://cf.shopee.com.br/file/dff3fda1eca63b45077cc3dbc809781e'
                    link="https://shopee.com.br/product/570256376/16881347658?af_click_lookback=7d&af_reengagement_window=7d&af_siteid=an_18112960000&af_sub_siteid=XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ&af_viewthrough_lookback=1d&c=-&is_retargeting=true&pid=affiliates&utm_campaign=-&utm_content=XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ&utm_medium=affiliates&utm_source=an_18112960000&utm_term=7q1arjw3gkb9XoWTi8WRo1A-5WJIYCieteUTZy.3Dco.BQ"
                />
                <Card title='Luva Pet Escova remove pelo'
                    imageurl='https://http2.mlstatic.com/D_NQ_NP_917222-MLB48844753988_012022-O.webp'
                    link='https://produto.mercadolivre.com.br/MLB-1261136553-luva-pet-escova-tira-remove-pelo-cachorro-gato-magnetica-top-_JM#position=31&search_layout=grid&type=item&tracking_id=1d411f6c-45b0-4eaa-9a5f-38fdf9920e6c'
                />
                <Card title='Ma Chérie Deo Colônia Fem.'
                    imageurl='https://http2.mlstatic.com/D_NQ_NP_954999-MLB51321017650_082022-O.webp'
                    link='https://produto.mercadolivre.com.br/MLB-2770915124-ma-cherie-deo-colnia-feminino-boticario-100ml-_JM#position=2&search_layout=grid&type=item&tracking_id=31c11b24-fc39-49e7-bde6-471ad7f3142c&DEAL_ID=MLB5338&S=landingHubbeleza-e-cuidado-pessoal&V=11&T=CarouselDynamic-home&L=AS-MELHORES-OFERTAS&deal_print_id=c68ba1e0-43fd-11ed-b88a-c79ea7313bee&c_id=carouseldynamic-home&c_element_order=undefined&c_campaign=AS-MELHORES-OFERTAS&c_uid=c68ba1e0-43fd-11ed-b88a-c79ea7313bee'
                />
                <Card title='Kit De Cristais'
                    imageurl='https://http2.mlstatic.com/D_NQ_NP_829327-MLB45310029476_032021-O.webp'
                    link='https://produto.mercadolivre.com.br/MLB-1781845679-kit-de-cristais-para-amor-equilibrio-paz-e-harmonia-_JM#position=6&search_layout=grid&type=item&tracking_id=9a28bf4f-51e3-4f4a-8f07-f48c6487d42f'
                />
            </div>
        </div>
    )
}