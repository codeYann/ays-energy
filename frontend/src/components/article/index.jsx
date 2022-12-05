import React from "react";
import image from "../../util/estacao-eolica.jpg"
import './style.css'

export default function ArticleContent() {
    return(
        <div className="title">
            <img src={image} alt="Estação Eólica" />
            <h1>Energia Solar e Energia Eólica</h1>
        <div className="subtitle">
            <div><h5>Escrito por John Doe</h5></div>
            <div><p>Segunda, 5 de Dezembro </p></div>
        </div>
        <hr/>
        <div className="text">
            <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC <br></br> 
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
        </div>
    );
}