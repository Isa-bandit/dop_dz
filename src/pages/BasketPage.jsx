import React from 'react';
import {useSelector} from "react-redux";

const BasketPage = () => {
    const Card= useSelector(state => state.cart)
    return (
        <ul>
            {
                Card.map(el => <div>
                    <li>{el.title}</li>
                </div>)
            }
        </ul>
    );
};

export default BasketPage;