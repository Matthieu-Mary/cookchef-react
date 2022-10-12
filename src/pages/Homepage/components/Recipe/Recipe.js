import React from 'react';
import styles from "./Recipe.module.scss";
import { useState, useContext } from "react";
import { ApiContext } from '../../../../context/ApiContext';

export default function Recipe({ recipe  : { _id, liked, title, image }, toggleLikedRecipe }) {
  const BASE_URL_API = useContext(ApiContext)

  async function handleClick() {
    console.log("handleClick")
    try {
      const response = await fetch(`${ BASE_URL_API }/${ _id }`, {
          method: 'PATCH',
          headers: {
            'Content-Type' : "application/json"
          },
          body: JSON.stringify({
            liked: !liked
          }),
        });    
          if(response.ok) {
            const updatedRecipe = await response.json();
            toggleLikedRecipe(updatedRecipe);
          }       
          } catch(e) {
            console.log("Erreur: " + e)
          }
  }


  return (
      <div onClick={ handleClick } className={ styles.recipe }>
          <div className={ styles.imgContainer }>
            <img src={ image } alt="recipe" />
          </div>
          <div className={`${ styles.recipeTitle } d-flex flex-column`}>
            <h3 className="mb-10">{ title }</h3>
            <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
          </div>    
      </div>
    
  )
}
 