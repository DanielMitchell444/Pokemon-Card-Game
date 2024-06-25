import styles from '../App.module.css';
import Cards from './Cards';

const Medium = ({ onClick, open, data}) => {
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
   
   export default Medium