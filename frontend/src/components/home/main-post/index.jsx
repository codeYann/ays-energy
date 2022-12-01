import React from "react";
import { Link } from 'react-router-dom';

import gato from "../../../util/gato-fofo.jpg"

import './style.css'

export default function MainPost(){
    return(
        <div className="post-container">
            <div>
                <img src={gato} alt="" />
            </div>
            <div className="post-content">
                <Link className="link" to={"#"}>
                    <h2>Post Title</h2>
                </Link>
                <p>Lorem ipsum vel est quisque venenatis ullamcorper interdum netus habitant pretium placerat accumsan pulvinar non turpis, adipiscing orci erat ut conubia vel dictumst venenatis vitae cras venenatis dapibus senectus duis. nisi a nisi purus justo cubilia at adipiscing posuere nec sit, auctor interdum nisl aptent eget nullam dapibus at luctus curabitur fusce, a facilisis curabitur dui sem semper integer hendrerit adipiscing. platea class vitae in ornare ipsum hendrerit eleifend pretium semper at, tellus dolor accumsan donec risus sodales nibh purus aliquet cursus, velit aenean risus fusce iaculis morbi class blandit habitasse. </p>
            </div>
        </div>
    );
}