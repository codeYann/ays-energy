import React from "react";
import image from "../../util/main-image.jpg"

import MainPost from "./main-post";
import GridPost from "./cells-post";
import BiggerPost from "./bigger-post";

import './style.css'

export default function HomeContent(){
    return(
        <div className="home-screen">
            <div className="initial-content">
                <div className="message">
                    <h1>AYS <br />Energy</h1>
                    <p>Produzindo energia <br />limpa</p>
                </div>
                <img src={image} alt="Imagem globo" />
                
            </div>


            <div className="initial-post">
                <MainPost />
            </div>

            <div className="cells-post">
                <GridPost />
            </div>

            <div className="last-post">
                <BiggerPost />
            </div>

            <button class="btn">See More <i class="fa-solid fa-circle-arrow-down"></i></button>
        </div>
    );
}