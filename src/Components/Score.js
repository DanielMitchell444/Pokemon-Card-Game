import styles from '../App.module.css'
import Header from './Header';
export default function Score({ currentScore, bestScore, highScore, option, isOpen, difficultyLevel }) {
    return (
      <div className= {styles.stats}>
        <p className="current-score">
          Current Score: <b>{currentScore}</b>
        </p>
        <p className="best-score">
          High Score:{highScore}
          {option === "Easy" &&
          <p className= {styles.scoreProgress}>
            {highScore} / 5
          </p>
}     

{
 option === "Medium" &&
 <p className= {styles.scoreProgress}>
  {highScore} / 7
  </p>
}
{option === "Hard" &&
      <p className= {styles.scoreProgress}>
            {bestScore} / 10
            </p>
}

        </p>
        </div>
    );
  }