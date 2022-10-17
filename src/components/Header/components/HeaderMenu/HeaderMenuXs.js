import React from "react"
import style from "./HeaderMenuXs.module.scss"

export default function HeaderMenuXs({setPage}) {
  return (
    <ul className={`${style.MenuContainer} card p-20`}>
      <li onClick={() => setPage("admin")}>Ajouter une recette</li>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  )
}
