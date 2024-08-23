import React from "react"
import './Gallery.css'
import './imagens-da-g/Images'
import Images from "./imagens-da-g/Images"

export default function FuncGallery({gallery}) {


  return (
    <div className="g-div">
      <div className="titul-div">
        <h1 className="g-titulo">Lançamentos !!!</h1>
      </div>
      <div>
        <img className="img-g" src={Images.image} />
      </div>
      <div className="div-sm">
        <button id={gallery.id} className="s-m">Saiba Mais</button>
      </div>
    </div>
  )
}