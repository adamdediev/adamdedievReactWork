import React, { Component } from 'react';
import './items.css'


export class Cart extends Component {
  render() {
    return ( 
      <div className='Carts'>
          <div className='img'></div>
          <div className='name'>Name:{this.props.item.blend_name}</div>
          <div className='origin'>Where:{this.props.item.origin}</div>
          <p className='tegs'>notes:{this.props.item.notes}</p>
      </div>
        
    );
   }
}

export default Cart