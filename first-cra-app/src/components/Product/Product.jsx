import React from "react";
import style from "./product.module.css"


function Product(props) {
  return (
    <div className={style.product}>
      <img className={style.img} src={props.img} alt="foto"/>
                <p className={style.price}>{props.price}</p>
                <p className={style.name}>{props.name}</p>
                <button className={style.btn}>Купить</button>
    </div>
  )
}

export default Product