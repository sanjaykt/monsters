import React from 'react';
import './card-list.styles.css';
import {Card} from "../card/card.component";
//
// export function CardList(props) {
//   console.log(props);
//   return <h1>Hello</h1>
// }

// export const CardList = props => {
//   console.log(props);
//   return <h1>Hello....</h1>
// }
//
// export const CardList = props => {
//   console.log(props);
//   console.log('children', props.children)
//   // return <div className='card-list'>{props.name} {props.children}</div>
//   return <div className='card-list'>{props.children}</div>
// }


export const CardList = props => {
  return <div className='card-list'>{
    props.monsters.map(monster => (
      // <h1 key={monster.id}>
      //   {monster.name}
      // </h1>
      <Card key={monster.id} monster={monster} />
    ))
  }</div>
}
