import React, { useState } from "react";
import styles from '../App.module.css'
import Cards from "./Cards";
import GameBoard from "./GameBoard";

const Start = ({onClick, option, open, handle, onClick3, onClick4, difficultyLevel, setDifficultyLevel, data, secondPlay}) => {

 const cardGoals = [5,10,18]
 const [cardGoal, setCardGoal] = useState(cardGoals[0])
 return(
 <div>
 <div className= {styles.modal}>
 <div className= {styles.modalContent}>
    <h1 className= {styles.askText}>What would you like to do?</h1>
        <div className= {styles.levelOptions}>
        <button  className= {styles.radio}
        onClick = {onClick}
        value = {"Easy"}
        >Easy</button>
        <button className= {styles.radio}
        onClick = {onClick3}
        value = {"Medium"}
        >Medium</button>
        <button className= {styles.radio}
        onClick = {onClick4}
        value = {"Hard"}
        >Hard</button>
        </div>

        <div className= {styles.options}>
         <button className= {styles.optionsButton} type = "button">Github Repo</button>
        </div>
 </div>
 </div>
 </div>
 )
}

export default Start;