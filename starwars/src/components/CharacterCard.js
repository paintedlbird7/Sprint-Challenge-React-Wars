import React from 'react';

function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.url} />  
    </div>
  );
}



export default CharacterCard;
