import React from "react";
import styles from '../App.module.css'

const Music = ({start}) => {

    return(
     <div>
      <button className= {styles.audio2}
      onClick = {start}
      >
     Play
      </button>
     </div>
    )
}

export default Music