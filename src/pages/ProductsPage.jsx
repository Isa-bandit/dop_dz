import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGoods, increaseCounter} from "../store/productsSlice";
import {addGood} from "../store/cartSlice";

const ProductsPage = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchGoods())
    }, []);

    const dataProducts= useSelector(state => state.goods.goods)
    const increaseCounterCart= (el) =>{
        dispatch(increaseCounter())
        dispatch(addGood(el))
    }


    return (
        <div style={{display:'flex', gap:'20px', flexWrap:'wrap', marginTop:'20px'}}>
            {
                dataProducts.map(el => [
                    <div style={{border:'2px solid', width:'250px', borderRadius:'10px', textAlign:"center"}}>
                        <div>{el.title}</div>
                        <img src={el.images[2]} alt={el.title} style={{width:'200px'}}/>
                        <button onClick={() =>{increaseCounterCart(el)}}>Купить</button>
                    </div>

                ])
            }
        </div>
    );
};

export default ProductsPage;