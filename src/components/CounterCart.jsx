import React from 'react';
import {useSelector} from "react-redux";

const CounterCart = () => {
    const {counter} = useSelector(state => state.goods)
    return (
        <div style={{width:'15px', borderRadius:'50%', backgroundColor:'red'}}>
            {counter}
        </div>
    );
};

export default CounterCart;