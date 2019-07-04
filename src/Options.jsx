import React from 'react'

module.exports = function Options(){
  const charList = ['Mario', 'Luigi', 'Yoshi', 'Kirby', 'Fox', 'Link', 'Samus', 'Ness', 'Donkey Kong', 'Pikachu', 'Jigglypuff', 'Captain Falcon']

  const componentList = [];
  charList.forEach(char => {
    componentList.push(<option key={char} value={char}>{char}</option>)
  })
  return componentList;
}