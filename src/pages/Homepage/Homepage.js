import React, { useContext } from "react"
import styles from "./Homepage.module.scss"
import Recipe from './components/Recipe/Recipe'
import { useState } from "react"
import { ApiContext } from "../../context/ApiContext"
import Loading from "../../components/Loading/Loading"
import Search from "./components/Search/Search"
import { useFetchData } from "../../hooks/useFetchData"

export default function Homepage() {

  const [filter, setFilter] = useState(""); 
  const [page, setPage] = useState(1)
  const BASE_URL_API = useContext(ApiContext)
  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page)

  function toggleLikedRecipe(updatedRecipe) {
    setRecipes( recipes.map( recipe => recipe._id === updatedRecipe._id ? updatedRecipe : recipe ))
  }

  function deleteRecipe(_id) {
    setRecipes(recipes.filter(recipe => recipe._id !== _id))
  }

  return (
    <div className="container d-flex flex-column flex-fill p-20">
        <h1 className="my-30">Découvrez nos nouvelles recettes <small className={styles.small}>-{ recipes.length }</small> </h1>
        <div className= {`d-flex flex-column card p-20 flex-fill mb-20 ${ styles.contentCard }`}>    
          <Search setFilter={ setFilter } />
          {(isLoading && !recipes.length) ? 
          <Loading />  : (
          <div className={ styles.grid }>
            { recipes
                .filter( recipe => recipe.title.toLowerCase().startsWith(filter))
                .map( recipe => <Recipe deleteRecipe={deleteRecipe} key={ recipe._id } recipe={ recipe } toggleLikedRecipe={ toggleLikedRecipe } />) }
          </div>
          )}
          <div className="d-flex justify-center align-center my-20 p-20">
            <button onClick={ () => setPage(page + 1) } className="btn btn-primary">Chargez plus de recettes</button>
          </div>
        </div>
    </div>
  )
}
  