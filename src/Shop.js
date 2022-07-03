import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';


export const Shop = () => {

  const dispatch = useDispatch();

  return (
      <div>
          <h1>Buy The Shoes</h1>
          <button className='btn-primary mx-2' onClick={() => {dispatch(actionCreators.withDrawMoney(100))}}>-</button>
          Add To Cart
          <button className='btn-primary mx-2' onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button>
      </div>
  );
  
}

export default Shop;