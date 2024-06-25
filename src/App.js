import logo from './logo.svg';
import styles from '../src/App.module.css'
import data from './Components/data'
import Cards from './Components/Cards';
import Header from './Components/Header';
import { useState, useRef, useCallback } from 'react';
import { useEffect } from 'react';
import { getPokemon, getAllPokemon } from '../src/Components/pokeService'
import PokemonList from './Components/pokeList';
import Start from './Components/Start';
import Music from './Components/Music';
import playAudio from './Components/playAudio';
import Easy from './Components/Easy';
import Win from './Components/Win';
import GameOver from './Components/GameOver';
import Exit from './Components/Exit';
import Score from './Components/Score';
import LoadingScreen from './Components/loadingScreen';
import GameBoard from './Components/GameBoard';
import { some } from 'async';


function App() {

  const [allPokemons, setAllPokemons] = useState([]);
  const [somethingIsClicked, setClickedd] = useState(false)
  const [guess, getGuess] = useState([]);
  const [option, setSelectedOption] = useState('')
  const [cardArray, setCardArray] = useState(allPokemons)
  const [isOpen, setIsOpen] = useState(true)
  const [currentScore, setCurrentScore] = useState(0)
  const [count, setCount] = useState(0)
  const [secondPlay, setSecondPlay] = useState(false)
  const [clicks, setClicked] = useState(false)
  const [game, restartGame] = useState(false)
  const [seed, setSeed] = useState(1);
  const [value, setValue] = useState("")


  const [difficultyLevel, setDifficultyLevel] = useState("Start")

  const [play, playAgain] = useState(false);
  const [datas, getData] = useState([])
  const [isflipped, setIsFlipped] = useState(false)
  const [open, isModalOpened] = useState(false)
  const [gameOver, openGameOver] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [results, getResults] = useState("")
  const [win, setWin] = useState("");
  const [loadings, setLoading] = useState(false)
  const [bestScore, setBestScore] = useState(localStorage.getItem("best-score") || "[]")
  const [isThisClicked, setIsClicked] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [cardShowing, setCardShowing] = useState(false)
  const [audios, setAudio] = useState("")
  const [clicked, isClicked] = useState(false)
  const [exit, setExit] = useState(false)
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonData2, setPokemonData2] = useState([])
  const [loading, isLoading] = useState(true)
  const [items, setItems] = useState([])
  const possiblePokemon = 721;

  const [offset, setOffset] = useState(Math.floor(Math.random() * possiblePokemon) + 1);

  function getUrL(limit, offset){
    return `https://pokeapi.co/api/v2/pokemon/?limit=${12}&offset=${300}`
  }


  useEffect(() => {
    async function fetchData(offset) {
      let response = await getAllPokemon(getUrL(30, offset))
      await loadPokemon(response.results)
      isLoading(false)
      console.log(response)
    }
    fetchData(offset)
  }, [offset])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet
    }))
    setPokemonData(_pokemonData)
    setCardShowing(false)
    
  }


  let easyScore = 5;
  let mediumScore = 10;
  let hardScore = 15;

  const isExited = () => {
   setExit(true)
   setDifficultyLevel("")

  }





 
  function shuffle(array) {
      
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];

    }
  
    setCardArray([...array])



    

    return array;
  }
  const matchCards = (e) => {
     
     if(guess.includes(e.target.name) && currentScore !== 5 
    && currentScore !== 7 && currentScore !== 10
    ){

      shuffle(pokemonData)
      checkWin()
      setWin(false)
      setPokemonData("")
      setBestScore(currentScore)
      localStorage.setItem("best-score", currentScore)


     }

    else if(!guess.includes(e.target.name)
  ) {
      let seenPokemon = [...guess, e.target.name];

      getGuess(seenPokemon);
      {console.log(e.target.name)}

      setCardShowing(false)
      checkWin()
      shuffle(pokemonData);
      incrementScore()

      console.log(seenPokemon)


     }

    }

  const onHandle = (level) =>{

    if(level === "Easy"){
      setDifficultyLevel('Easy');
      setIsOpen(false)
      setHighScore(5)
      setWin("")
      console.log(level)
      setPokemonData(pokemonData)
    
    } else if(level === "Medium"){
        setDifficultyLevel("Medium")
        {console.log(level)}
        setWin("")
        setHighScore(7)
        setIsOpen(false);
        setPokemonData(pokemonData)

    }

   else if(level === "Hard"){
    setDifficultyLevel("Hard")
    {console.log(level)}
    setWin("")
    setHighScore(10)
    setIsOpen(false);
    setPokemonData(pokemonData)
   }
  }

  const getSecondPlay = () => {
    pokemonData.map(items => {
     return <Cards 
     name = {items.pokemon}
     />
    })
  }

  const removeValFromArray = (array, index) => {
   return array.find((f => f !== index))
  }

  const reset = () => {
   setCurrentScore(0)
   setDifficultyLevel("")
  }


  const checkWin = () => {
    if(currentScore == 5 && difficultyLevel  === "Easy"){
    setWin(true);
    setPokemonData("")
    setCurrentScore(5)
    setBestScore(5)

    setDifficultyLevel("Easy")

    } else if(currentScore === 7 && difficultyLevel === "Medium"){
      setWin(true);
      setPokemonData("")
      setCurrentScore(7)
      setBestScore(7)
      setDifficultyLevel("Medium")
      
    }

    else if(currentScore === 10 && difficultyLevel === "Hard"){
      setWin(true)
      setPokemonData("")
      setCurrentScore(10)
      setBestScore(10)
      setDifficultyLevel("Hard")
    }

    
  }
  


  const setClick = () => {
   isClicked(true)
   setWin("")
   setIsOpen(false)
   playAgain(true)
   setCardShowing(true)
   setPokemonData(pokemonData)
   setDifficultyLevel("Start")
   console.log(play)
  }

  const restart = (e) => {

   if(e.target.value === "restart" && difficultyLevel === "Easy"){
    setIsOpen(false)
    setWin("")
    restartGame(true)
    setCurrentScore(0)
    getGuess([])
    setDifficultyLevel("Easy")
    setPokemonData(cardArray)
    console.log('this is clicked')

   }

  else if(e.target.value === "restart" && difficultyLevel === "Medium"){
    setIsClicked(true)
    restartGame(true)
    console.log('this is clicked')
    setPokemonData(cardArray)
    setIsOpen(false)

   getGuess([])
   setDifficultyLevel('Medium')
   setWin("")
   setCurrentScore(0)
   console.log(difficultyLevel)
  }

  else if(e.target.value === "restart" && difficultyLevel === "Hard"){
    setIsClicked(true)
    console.log('this is clicked')
    setPokemonData(cardArray)
    restartGame(true)
    setIsOpen(false)

   getGuess([])
   setDifficultyLevel('Hard')
   setWin("")
   setCurrentScore(0)
   console.log(difficultyLevel)
  }

  else{
    console.log('this does not work')
  }

  
  }
  useEffect(() => {
    console.log('This is' + isThisClicked)
    console.log(difficultyLevel)
    console.log(currentScore)
   })

  const Easy = () => {
    if(exit === false){
     pokemonData.map(pokemon => {
      return <Cards
        image = {pokemon.sprites.front_default}
 key = {pokemon.name}
 name = {pokemon.name}
 value = {pokemon.name}
      />
     })
    }
  }

  const handleFlip = () => {
    setIsFlipped(!isflipped)
  }

  const handleExit = (e) => {
    if(e.target.value === "Exit"){
      setExit(true);
      setDifficultyLevel("Start")
      setCurrentScore(0)
      setIsOpen(true)
      setPokemonData(cardArray)
      setWin("")
      getGuess([])
      setSecondPlay(true)
      console.log(difficultyLevel)
      setIsClicked(true)
    }
   else{
   setIsClicked(false)
   }

  }

  const matchCard = (e) => {
          if(guess.includes(e.target.value)){
            getGuess([])
            shuffle(allPokemons)
            setCurrentScore(0)

            setWin(false)
            setPokemonData("")
          }
          else{
            let seenPokemon = [...guess, e.target.value]
            getGuess(seenPokemon)
            setCurrentScore(currentScore++);
            shuffle(pokemonData)
            checkWin()
        }


     }



  const handleUserModalOpen = () => {
     setIsOpen(true)
  }

  const handleGameOverModalOpen = () => {
    openGameOver(true)
  }
  const onSubmit = (event) => {
    event.preventDefault();
  } 

  const onClickHandle = (e) => {
    e.preventDefault();
  }

  const incrementScore = () => {
    const incrementedScore = currentScore + 1;
    setCurrentScore(incrementedScore);
    const newBestScore = Math.max(incrementScore, bestScore)
    setBestScore(newBestScore)
    localStorage.setItem('best-score', newBestScore)
  }

  return (
      <div className= {styles.overlay}>
      { difficultyLevel === "Start" ?
     <Start 
     onClick={(e) => onHandle("Easy")}
     onClick3 = {(e) => onHandle("Medium")}
     onClick4 = {(e) => onHandle("Hard")}
     setDifficultyLevel = {setDifficultyLevel}
     load = {onClickHandle}
     value = {difficultyLevel}
     onClick2 = {onClickHandle}
     handle = {handleUserModalOpen}
     open = {isOpen}
     data = {pokemonData}
     secondPlay={secondPlay}

     /> 
    :
    <GameBoard
    data = {pokemonData} 
    showing = {cardShowing}
    onClick = {(e) => matchCards(e)}
    bestScore={bestScore}
    highScore = {highScore}
    win = {win}
    setClick = {setClick}
    isOpen = {open}
    exit={exit}
    currentScore = {currentScore}
    play = {play}
    seed = {seed}
    reset = {reset}
    handleExit = {(e) => handleExit(e)}
    click = {isThisClicked}
    playAgain = {play}
    difficultyLevel = {difficultyLevel}
    secondPlay = {secondPlay}
    somethingIsClicked = {somethingIsClicked}
    loading = {loading}
    guess = {guess}
    restartGame = {(e) => restart(e)}
    value = {game}
    game = {game}
    values = {value}
    game2 = {restartGame}
    />
  }
 <>

 
 </>
 <>
 </>
  
</div>
  
  );
    }

export default App;
