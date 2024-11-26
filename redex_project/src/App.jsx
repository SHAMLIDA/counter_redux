import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incremeentByAmount, increment, reset } from './Redux/CounterSlice';
import { useState } from 'react';




function App() {
  const [amount,setamount]=useState(0)

 const dispatch=useDispatch()
  const {count}= useSelector (state=>state.counterReducer)

  const handleincrementByAmount=()=>{
      if (amount) {
        dispatch(incremeentByAmount(Number(amount)))
        
      }
      else{
        alert("enter the amount to increment counter value")
      }
  }
  return (
    <>
      <div className="container  p-4">
       
        <div className="text-center p-3">
          <h1>Counter App</h1>
        </div>

      
        <div className="border border-3 border-dark rounded mt-5 p-4 bg-black">
        
          <div className="text-center d-flex justify-content-center align-items-center mb-4">
            <h1 className="display-4 text-light">{count}</h1>
          </div>

          <div className="d-flex justify-content-between px-3">
            <button onClick={()=>dispatch(increment())} type="button" className="btn btn-primary">Increment</button>
            <button onClick={()=>dispatch(reset())} type="button" className="btn btn-danger">Reset</button>
            <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-success">Decrement</button>
          </div>

       
          <div className="d-flex align-items-center justify-content-around mt-5">
            <input onChange={(e)=>setamount(e.target.value)} type="number" placeholder="Enter amount" className="form-control w-50 me-3"/>
            <button onClick={handleincrementByAmount}  type="button" className="btn btn-primary">
              Increment by Amount
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
