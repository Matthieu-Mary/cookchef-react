import React from 'react';
import styles from "./Search.module.scss";

export default function Search({ setFilter }) {

    function handleInput(e) {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase())
      }    

  return (
    <div className={`d-flex flex-row align-center justify-center my-30 ${ styles.searchBar  }`}>
        <i class="fa-solid fa-magnifying-glass mr-15"></i>
        <input onInput={ handleInput } className="flex-fill" type="text" placeholder="Rechercher ... " />
    </div>  
  )
}
