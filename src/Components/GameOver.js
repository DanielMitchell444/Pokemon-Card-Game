import styles from '../App.module.css'
import Cards from './Cards'
const GameOver = ({setClick, handleExit, count, playAgain, win, onClick, data, option, clicked, open, onClick4, exit, currentScore, restartGame, play, difficultyLevel}) => {
    
  
  return( 
    <div className= {styles.modal}>
    <div className= {styles.modalContent}>
      {win === false &&
    <><h1>You Lose</h1><img src="https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif" class={styles.img} alt=""></img><div className={styles.score}>
            <span className={styles.finalScore}>
              Your final score is {currentScore}
            </span>
            <div className={styles.options}>
              <button
                className={styles.optionsButton}
                onClick={restartGame}
                value={"restart"}
              >Play Again</button>
              <button className={styles.optionsButton}
                onClick={handleExit}
                value={"Exit"}
              >Exit</button>

            </div>
          </div></>
}
   </div>
 </div>
    )
    }
   
   export default GameOver