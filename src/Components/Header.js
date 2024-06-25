import React from "react";
import styles from '../App.module.css'
import pokeBall from '../MP4/pokeball.png'
  export default function Header({ children, onQuit }) {
    return (
      <header className="header">
        <h1>
          <button onClick={onQuit} className= {styles.logoButton}>
            <img
              src={pokeBall}
              alt="pokeball"
              className= {styles.pokeBalls}
            />
            <span>
              <span className={styles.poke}>Poké</span>
              <span className = {styles.memo}>Card</span>
            </span>
          </button>
        </h1>
        {children}
      </header>
    );  
    }