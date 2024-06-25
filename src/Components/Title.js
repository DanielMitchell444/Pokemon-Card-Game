import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE = 'My Page Title';

class Title extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>

          <img
              src={pokeBall}
              alt="pokeball"
              className= {styles.pokeBalls}
            />
            <span>
              <span className={styles.poke}>Poké</span>
              <span className = {styles.memo}>Card</span>
            </span>
          </title>
        </Helmet>
        ...
      </>
    )
  }
}