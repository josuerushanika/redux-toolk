import { ChevronDown,ChevronUp } from '../icons';
import { removeItem , increase, decrease} from '../features/cart/cartSlice';//remove item
import { useDispatch } from 'react-redux';
import React from 'react'

function CartItem({id,img,title,price,amount}) {
  const dispatch = useDispatch()  remove item

  return <article className='cart-item'>
    <img src={img} alt={title} />
    <div>
      <h4>{title}</h4>
      <h4 className='item-price'>${price}</h4>
      <button className='remove-btn' onClick={()=>{dispatch(removeItem(id)) //remove item by it id in carditems.js store
      }}>remove</button>
    </div>
    <div>
      <button className='amount-btn' onClick={()=>{dispatch(increase({id}))}}>
        <ChevronUp />
      </button>
      <p className='amount'>{amount}</p>
      <button className='amount-btn' onClick={()=>{
        if(amount ===  1){
          dispatch(removeItem(id))
          return
        }
        dispatch(decrease({id}))}}>
        <ChevronDown />
      </button>
    </div>
  </article>
  
  
}

export default CartItem
