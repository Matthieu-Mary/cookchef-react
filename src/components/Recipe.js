import React from 'react';
import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recipes.jpg"

export default function Recipe() {
  return (
      <div className={ styles.recipe }>
          <div className={ styles.imgContainer }>
            <img src={recipe} alt="recipe" />
          </div>
          <div className={ styles.recipeTitle }>
            <h3>Salade de printemps</h3>
          </div>    
      </div>
    
  )
}
