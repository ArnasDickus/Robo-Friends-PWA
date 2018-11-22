

import React from 'react';
import Card from './Card';





const CardList = ({robots}) => {    
    console.log("Cardlist");
    return (
        <div>
    {
        // user who should return. It can be any variable
        // PROPS - things that come out of state
        // PARENT feeds State into child component >> 
                robots.map((user, i) => {
                return (
                <Card 
                key = {i} 
                id = {robots[i].id} 
                name = {robots[i].name} 
                email = {robots[i].email} 
                />
            );
        })
    }
    </div>
  
    );
  }

export default CardList;