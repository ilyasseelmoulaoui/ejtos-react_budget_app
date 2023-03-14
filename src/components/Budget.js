import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, spending, currency } = useContext(AppContext);

    const [inputBudget, setInputBudget] = useState(budget);
  
    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);

        if(spending>value){
            alert("You cannot reduce the budget value lower than the spending");
            event.target.value(spending);
            dispatch({ type: 'SET_BUDGET', payload: spending });
        }

        if(value<=20000){
            setInputBudget(value);
            dispatch({ type: 'SET_BUDGET', payload: value });
        }else{
            alert("The budget cannot exceed £ 20,000");
        }


        
    };
  
    return (
      <div className='alert alert-secondary'>
        <span>Budget: {currency} </span>
        <input type='number'  value={inputBudget} onChange={handleInputChange} step='10' />
      </div>
    );
  };
  
export default Budget;