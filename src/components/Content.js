import React from 'react'
import styles from "./Content.module.scss"
import Recipe from './Recipe'

export default function Content() {
  return (
    <div className="container flex-fill p-20">
        <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
        <div className= {` card p-20 ${ styles.contentCard }`}>      
            <div className={styles.grid}>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    </div>
  )
}
 