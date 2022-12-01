import React from "react";
import { Link } from 'react-router-dom';

import gato from "../../../util/gato-fofo.jpg"

import './style.css'

export default function BiggerPost(){
    return(
        <div className="bigger-container">
            <div>
                <img src={gato} alt="" />
            </div>
            <div className="bigger-content">
                <Link className="link" to={"#"}>
                    <h2>Post Title</h2>
                </Link>
                <p>Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium placerat accumsan pulvinar non turpis, adipiscing orci erat ut conubia vel dictumst venenatis vitae cras venenatis dapibus senectus duis.</p>
                <time>12 de Maio de 2022</time>
            </div>
        </div>
    );
}