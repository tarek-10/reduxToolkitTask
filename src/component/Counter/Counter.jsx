import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementFun, incrementFun } from '../../redux/counterSlice';
// import { decrmentFun, incrementFun } from '../../redux/action/actionCreator';
import "./Counter.css";
const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        // incrementFun(dispatch);
        dispatch(incrementFun());
    }

    const handleDecrement = ()=>{

        // decrmentFun(dispatch);
        dispatch(decrementFun());
    }
  return (
    <div className='test'>
          <p className='pTest'>{count}</p>
       <div className="test2">
       <button className="btn" onClick={handleIncrement}>Increment</button>
        <button className="btn" onClick={handleDecrement}>Decrement</button>
       </div>
    </div>
  )
}

export default Counter