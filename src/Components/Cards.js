import React, { useEffect, useState } from "react";
import styles from '../App.module.css';
import cardBack from '../MP4/card-back.png'
import "../Card.css"
import Tilt from 'react-parallax-tilt';
const Cards = ({id, name, image, onClick, cardShowing}) => {

    const [interactable, isInteractable] = useState(false)
    const [flipped, isFlipped] = useState(false)

    const animationTime = 850


    useEffect(() => {
     setTimeout(() => isInteractable(true), animationTime)
    })
    return(
        <Tilt
        reset
        glareMaxOpacity={0.4}
        glarePosition="all"
        className={`cardContainer ${cardShowing ? "front" : "back"} ${
          cardShowing && interactable ? undefined : "pointer-events-none"
        }`}
        >
       <div className= {styles.cardContainer} value = {name}>
        <div className= {styles.cardInner}
        name = {name}
        >
        <div className= {styles.cardFront}>
          <button className= {styles.card} onClick={onClick}
          name = {name}
          >

            <img
              src={image}
              alt={name}
              className= {styles.cardImage}
              draggable="false"
              name = {name}
              value = {name}
            />
            <p className= {styles.cardName}>
              <span className="name">{name}</span>
            </p>
          </button>
        </div>
        <div className= {styles.cardBack}>
          </div>
        </div>
      </div>
      </Tilt>
         )
        }


export default Cards;