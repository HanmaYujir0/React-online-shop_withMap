import React from "react";
import img from "./img/shop.jpg"
import style from '../Header/header.module.css'

function Header() {
  return (
    <header className= {style.header}>
      <div className={style.text}><h2>Intocode Coding Shopcamp</h2></div>
      <div><img className={style.img} src={img} alt="корзина" /></div>
    </header>
  )
}
export default Header