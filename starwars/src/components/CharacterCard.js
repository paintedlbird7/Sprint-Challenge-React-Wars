import React from 'react';
import "./CharacterCard.scss"
import { Card, 
  // Image 
} from 'semantic-ui-react';
import styled from 'styled-components'
import { StyledH2 } from '../Styles.js';

const StyledCard = styled(Card)`
width: 300px;
max-width: 100%;
background-color: lightblue !important;

h2 {
    margin-top: 0;
    padding-top: 25px;
    background: linear-gradient(#f8f8f8, #ffffff);
}
.content {
    font-size: 0.8rem;
    line-height: 1.5;
}`;

function CharacterCard(props) {
  console.log(props);
  return (
        <Card className="photo-card">
          {/* <img src={props.url} /> */}
        <StyledH2 color="red">{props.name}</StyledH2>   
        <Card.Content>
          <div> birth_year={props.birth_year} </div>
          <Card.Description className="content">
            {props.gender}
           </Card.Description>
      </Card.Content>
      </Card>

  );
}

export default CharacterCard;
