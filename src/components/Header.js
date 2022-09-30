import React from 'react';
import style from "./Header.module.scss";
import logo from "../assets/images/cookchef.png";
import HeaderMenuXs from "./HeaderMenuXs";
import { useState } from "react";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
      <header className={ `${style.header} d-flex flex-row align-center` }>  
        <div className="flex-fill">
            <img src={ logo } alt="logo cookchef" />
        </div>
        <ul className={style.headerList}>
            <button className="mr-5 btn btn-reverse-primary">
                <i class="fa-solid fa-heart mr-5"></i>
                <span>Wishlist</span>
            </button>
            <button className="btn btn-primary">Connexion</button>
        </ul>
        <i onClick={() => setShowMenu(true)}class={`fa-solid fa-bars ${style.headerXs}`}></i> 
        {
          showMenu && 
          <>
            <div onClick={() => setShowMenu(false)} className="calc"></div>
            <HeaderMenuXs />
          </>
        }
    </header>
  )
}

