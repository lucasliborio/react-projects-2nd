import React from "react";
type Props = {
  id: number,
  character: {
    name: string,
    origin:{
      name: string
    },
    image: string
  }
}

export const Character: React.FC<Props> = ({ character, id }: Props) => {
  return (
    <div className="card-box"id={id.toString()}>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>{`Origin: ${character.origin?.name}`}</p>
    </div>
  )
}