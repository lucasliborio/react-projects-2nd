import React, { useState, useEffect } from "react"
import { Character } from "./character"

export const List: React.FC = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchCharacter() {
      const data = await fetch('https://rickandmortyapi.com/api/character')
      const { results } = await data.json()
      console.log(results)
      setCharacters(results)
      setIsLoading(false)
    }
    fetchCharacter()
  }, [])
  return (
    <div>
      <h2>Characters</h2>
      {/* Utiliizar mais o operador ternario aqui para conditional renders */}
      {isLoading ?
        (<h2>Loading...</h2>)
        : characters.map(c => (
          <Character id={c.id} character={c} />
        ))}

    </div>
  )
}