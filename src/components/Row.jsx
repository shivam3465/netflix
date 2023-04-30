// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";

// const imageLink = "https://m.media-amazon.com/images/I/71RXFTfUC2L._SY550_.jpg";

let Card = ({ img }) => {
  return <img src={img} alt="" className="card"/>;
};


export default function Row({ title ,tag,arr}) {

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="cards">
        {
            arr.map((obj,i)=>{
                return <Card img={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} key={i}/>
            })
        }
      </div>
    </div>
  );
}
