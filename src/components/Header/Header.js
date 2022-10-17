import React from 'react';
import style from "./Header.module.scss";
import logo from "../../assets/images/cookchef.png";
import HeaderMenuXs from "./components/HeaderMenu/HeaderMenuXs";
import { useState } from "react";

export default function Header({setPage}) {

  const [showMenu, setShowMenu] = useState(false);

  return (
      <header className={ `${style.header} d-flex flex-row align-center` }>  
        <div onClick={ () => setPage("homepage") } className="flex-fill">
            <img src={ logo } alt="logo cookchef" />
        </div>
        <ul className={style.headerList}>
            <button onClick={ () => setPage("admin") } className="mr-15 btn btn-primary">Ajouter une recette</button>
            <button className="mr-15 btn btn-reverse-primary">
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
            <HeaderMenuXs setPage={setPage} />
          </>
        }
    </header>
  )
}

