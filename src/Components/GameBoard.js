import React, { useState } from "react";
import Header from '../Components/Header'
import styles from '../App.module.css'
import Cards from "./Cards";
import Score from "./Score";
import Win from "./Win";
import GameOver from "./GameOver";
import LoadingScreen from "./loadingScreen";
import Start from "./Start";
const GameBoard = ({pokemonData, highScore, options, value,  click, isThisClicked,matchCards, isOpen, win, count, onClick, data, setClick, cardShowing, open, exit, handleExit, difficultyLevel, seed, reset, play, secondPlay, currentScore, bestScore, game, playAgain, restartGame, game2}) => {
    
    const [results, setResults] = useState('')




 return (

<>
 <Header 
 />
 {difficultyLevel === "Easy" &&
 <Score
  currentScore={currentScore}
  difficultyLevel = {difficultyLevel}
  bestScore={bestScore}
  highScore = {highScore}
 />
}


{difficultyLevel === "Medium" &&
  <Score
 currentScore={currentScore}
 difficultyLevel={difficultyLevel}
 bestScore={bestScore}
 highScore = {highScore}
 />
}
{difficultyLevel === "Hard" && 
<Score
currentScore={currentScore}
difficultyLevel={difficultyLevel}
bestScore={bestScore}
highScore = {highScore}
/>

}




<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 5  && difficultyLevel === "Easy" &&
  data && data.map(pokemon => {
   return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   cardShowing = {cardShowing}
   />
  })
  
  }


  
  


<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 7 && difficultyLevel === "Medium" &&
  data && data.map(pokemon => {
   return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   cardShowing = {cardShowing}
   />
  })
  
  }

<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 10 && difficultyLevel === "Hard" && 
  data && data.map(pokemon => {
    return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   />
  })
  
  }

  
{currentScore === 0 && difficultyLevel === "Hard" &&
  data && data.map(pokemon => {
   return <Cards
 image={pokemon.sprites.front_default}
 name = {pokemon.name}
 onClick={onClick}
   />
  })
  }


 

 

 

 {currentScore == 5 && difficultyLevel === "Easy"  &&
 <Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />


}

{currentScore === 7 && difficultyLevel === "Medium" &&

<Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />

}

{currentScore === 10 && difficultyLevel === "Hard" &&
<Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />

}


{win === false && difficultyLevel === "Easy" &&
<GameOver
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
win = {win}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}


/>

}

{win === false && difficultyLevel === "Medium" &&
<GameOver
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}
win = {win}


/>


}

<div className= {styles.container}>
<div className= {styles.cards}>
  {value === "restart" &&
   <div>
   { data && data.map((pokemon) => <Cards image = {pokemon.sprites.front_default} name = {pokemon.name} />)

   }
    </div>
}
{win === false && difficultyLevel === "Hard" &&
<GameOver
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}
win = {win}


/>


}




</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
 )
}

export default GameBoard