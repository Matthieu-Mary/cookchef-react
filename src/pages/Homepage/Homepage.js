import React, { useContext, useEffect } from "react"
import styles from "./Homepage.module.scss"
import Recipe from './components/Recipe/Recipe'
import { useState } from "react"
import { ApiContext } from "../../context/ApiContext"
import Loading from "../../components/Loading/Loading"

export default function Homepage() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState(""); 
  const [page, setPage] = useState(1)
  const BASE_URL_API = useContext(ApiContext)

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL_API}?skip=${ (page - 1) * 9 }&limit=9`);
        if(response.ok && !cancel) {
          const newRecipes = await response.json()
          setRecipes( x => Array.isArray(newRecipes) ?[...x, ...newRecipes] : [...x, newRecipes])
        }
      } catch(e) {
        console.log("Erreur :" + e)
      } finally {
        if(!cancel) {
          setIsLoading(false)
        }
      }
    }
    fetchRecipes();
    return () => cancel = true;
  }, [BASE_URL_API, page]) 

  function toggleLikedRecipe(updatedRecipe) {
    setRecipes( recipes.map( recipe => recipe._id === updatedRecipe._id ? updatedRecipe : recipe ))
  }

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase())
  }

  return (
    <div className="container d-flex flex-column flex-fill p-20">
        <h1 className="my-30">Découvrez nos nouvelles recettes <small className={styles.small}>-{ recipes.length }</small> </h1>
        <div className= {`d-flex flex-column card p-20 flex-fill mb-20 ${ styles.contentCard }`}>    
          <div className={`d-flex flex-row align-center justify-center my-30 ${ styles.searchBar  }`}>
            <i class="fa-solid fa-magnifying-glass mr-15"></i>
            <input onInput={ handleInput } className="flex-fill" type="text" placeholder="Rechercher ... " />
          </div>  
          {(isLoading && !recipes.length) ? 
          <Loading />  : (
          <div className={ styles.grid }>
            { recipes
                .filter( recipe => recipe.title.toLowerCase().startsWith(filter))
                .map( recipe => <Recipe key={ recipe._id } recipe={ recipe } toggleLikedRecipe={ toggleLikedRecipe } />) }
          </div>
          )}
          <div className="d-flex justify-center align-center my-20 p-20">
            <button onClick={ () => setPage(page + 1) } className="btn btn-primary">Chargez plus de recettes</button>
          </div>
        </div>
    </div>
  )
}
  