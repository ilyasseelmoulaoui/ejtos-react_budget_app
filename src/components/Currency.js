import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleOnChange = (event) =>{
        const value = event.target.value;

        dispatch({ type: 'CHG_CURRENCY', payload: value });
        
    }
    return (
        <div className='alert alert-primary' style={{backgroundColor:'#9de49d'}}>
            <label style={{color:"white"}}>Currency </label>
            <select defaultValue="£" name="currency" style={{backgroundColor:"transparent", border:"none"}} onChange={handleOnChange}>
                <option value="$" style={{backgroundColor:'#9de49d'}}>($ Dollar)</option>
                <option value="£" style={{backgroundColor:'#9de49d'}}>(£ Pound)</option>
                <option value="€" style={{backgroundColor:'#9de49d'}}>(€ Euro)</option>
                <option value="₹" style={{backgroundColor:'#9de49d'}}>(₹ Ruppee)</option>
            </select>
        </div>
    );
};
export default Currency;