import React from "react";
import Cards from "./Cards";
import styles from '../App.module.css'
const Easy = ({open, image, name, id, key, onClick, data}) => {
    return(
     data.map(pokemon => {
    <div className= {styles.cardContainer}>
     <Cards 
      image = {pokemon.image}
      onClick={onClick}
      name = {pokemon.name}
      open = {open}
     />
     </div>
     }
    )
    )
}

export default Easy