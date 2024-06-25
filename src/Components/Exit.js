import styles from '../App.module.css';
import Easy from './Easy';
import Medium from './Medium';
const Exit = ({onClick, option, open, handle, onClick3, onClick4}) => {
    return(
    <div>
   {open === true &&
    <div className= {styles.modal2}>
    <div className= {styles.modalContent}>
       <h1 className= {styles.askText}>What would you like to do?</h1>
           <div className= {styles.levelOptions}>
           <button  className= {styles.radio}
           onClick = {onClick}
           >Easy</button>
           <button className= {styles.radio}
           onClick = {onClick3}
           >Medium</button>
           <button className= {styles.radio}
           onClick = {onClick4}
           >Hard</button>
           </div>
           {option === "Easy" && <Easy />}
               {option === "Medium" && <Medium />}
           <div className= {styles.options}>
            <button className= {styles.optionsButton} type = "button">Github Repo</button>
           </div>
    </div>
    </div>
   }
    </div>
    )
   }