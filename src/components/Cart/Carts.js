import React, { Component } from 'react';
import Cart from './Cart';
import './media.css'
import '../../index.css'


export class Carts extends Component {
  render() {
    return (
     
      <main>
            {this.props.items.map(el => ( 
               <Cart key={el.id} item = {el} />
               ))}
        </main>
        
    )
  }
}

export default Carts