import React from 'react'

function PokemonList({ pokemon }) {

  return (
    <>
    <div className='gridContainer'>
      <div className= "grid">
        <div className='pokeType'>

          <img className='pokeImage' src={pokemon.sprites.front_default} alt='pokemon' />
              <div className='pokeName'>
                {pokemon.name}
              </div>
              <div className='pokeOwned'>
                <div># <span>{pokemon.order}</span></div>
              </div>

          <div className='pokeTypes'>
            {
              pokemon.types.map((type, i) => {
                return (
                  <div className='pokeSkill' key={i}>
                    {type.type.name}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PokemonList