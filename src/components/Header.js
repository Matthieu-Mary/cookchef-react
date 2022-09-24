import React from 'react';
import style from "./Header.module.scss";
import logo from "../assets/images/cookchef.png"

export default function Header() {
  return (
      <header className={ `${style.header} d-flex flex-row align-center` }>
        <i class="fa-solid fa-bars mr-15"></i> 
        <div className="flex-fill">
            <img src={ logo } alt="logo cookchef" />
        </div>
        <ul>
            <button className="mr-5 btn btn-reverse-primary">
                <i class="fa-solid fa-basket-shopping mr-5"></i>
                <span>Panier</span>
            </button>
            <button className="btn btn-primary">Connexion</button>
        </ul>
        
    </header>
  )
}

