import React from "react";
import styles from '../App.module.css'
import Easy from "./Easy";
import Cards from "./Cards";
import GameBoard from "./GameBoard";

const Win = ({setClick, e, handleExit, count, playAgain, win, onClick, data, option, clicked, open, onClick4, exit, currentScore, restartGame, play, difficultyLevel}) => {
 return( 
 <div className= {styles.modal}>
    <div className= {styles.modalContent}>
    {currentScore === 5 && difficultyLevel === "Easy" ? <h1>You win</h1> : null}
    {currentScore === 5 && difficultyLevel === "Easy" ? <img src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" class= {styles.img} alt=""></img> :
     null
    }
     {currentScore === 7 && difficultyLevel === "Medium" ? <h1>You win</h1> : null}
    {currentScore === 7 && difficultyLevel === "Medium" ? <img src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" class= {styles.img} alt=""></img> : null
    }
    {currentScore === 10 && difficultyLevel === "Hard" ? <h1>You win</h1> : null}
    {currentScore === 10 && difficultyLevel === "Hard" ? <img src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" class= {styles.img} alt=""></img> :
   null
    }

    
   <div className= {styles.score}>
    <span className= {styles.finalScore}>
     Your final score is {currentScore} 
    </span>
    <div className= {styles.options}>
     <button 
     className= {styles.optionsButton}
     onClick = {restartGame}
     value = {"restart"}
     >Play Again</button>
     <button className= {styles.optionsButton}
     onClick={handleExit}
     value = {"Exit"}
     >Exit</button>

    </div>
   </div>
   </div>

 </div>
 )
 }

export default Win;