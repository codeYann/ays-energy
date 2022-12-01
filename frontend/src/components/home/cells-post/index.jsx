import React from "react";
import { Link } from 'react-router-dom';

import gato from "../../../util/gato-fofo.jpg"

import './style.css'

export default function GridPost(){
    return(
        <div className="grid">
            <div className="cells">
                <img src={gato} alt="" />
                <div className="content">
                    <Link className="link" to={"#"}>
                        <h3>celula 1</h3>
                    </Link>
                    <p>Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.</p>
                    <time>12 maio de 2012</time>
                </div>  
            </div>

            <div className="cells">
                <img src={gato} alt="" />
                <div className="content">
                    <Link className="link" to={"#"}>
                        <h3>celula 2</h3>
                    </Link>
                    <p>Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium .</p>
                    <time>12 maio de 2012</time>
                </div>  
            </div>
            <div className="cells">
            <img src={gato} alt="" />
                <div className="content">
                    <Link className="link" to={"#"}>
                        <h3>celula 3</h3>
                    </Link>
                    <p>Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium.</p>
                    <time>12 maio de 2012</time>  
                </div>  
            </div>
        </div>
    );
}