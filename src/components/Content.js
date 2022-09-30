import styles from "./Content.module.scss"
import Recipe from './Recipe'
import { data } from "../data/recipes"
import { useState } from "react"

export default function Content() {

  const recipes = data;
  const [filter, setFilter] = useState();

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase())
  }

  return (
    <div className="container flex-fill p-20">
        <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
        <div className= {`d-flex flex-column card p-20 ${ styles.contentCard }`}>    
          <div className={`d-flex flex-row align-center justify-center my-30 ${styles.searchBar}`}>
            <i class="fa-solid fa-magnifying-glass mr-15"></i>
            <input onInput={ handleInput } className="flex-fill" type="text" placeholder="Rechercher ... " />
          </div>  
          <div className={styles.grid}>
            { recipes.filter( recipe => recipe.title.toLowerCase().startsWith(filter) ).map((recipe) => <Recipe title={recipe.title} image={recipe.image} />) }
          </div>
        </div>
    </div>
  )
}
  