import React from "react";
import ArticleContent from "../../components/article";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Article(){
   return(
    <div>
        <Navbar />
        <ArticleContent />
        <Footer />
    </div>
    );
}