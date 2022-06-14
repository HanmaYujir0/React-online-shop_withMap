import React from "react";
import style from './sidebar.module.css'



function Sidebar() {
  return (
    <div className={style.categories_cont}>
      <p>Гаджеты и аксессуары</p>
      <hr />
      <p>Бытовая техника</p>
      <hr />
      <p>Прочее</p>
    </div>
  )
}

export default Sidebar