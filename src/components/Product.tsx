import { Cart } from "./Cart";
import { useState } from "react";
import { ProductBox } from "./ProductBox";
import './Product.css'
var products = [
    {
       id:1,
       name:'W Suit for Ladies',
       type:'Ladies Wear',
       price:1000
    },
    {
        id:2,
        name:'Women Suit for Ladies',
        type:'Ladies Wear',
        price:10000
     },
     {
        id:3,
        name:'Mid Suit for Ladies',
        type:'Ladies Wear',
        price:5000
     },
     {
        id:4,
        name:'Suit for Ladies',
        type:'Ladies Wear',
        price:100
     }
];

export function Product(){
    const [cartNum, setCartNum] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)
    const productRenderList = products.map((product)=>{
        return (<ProductBox key={product.id} product={product} onAddOrRemove={calculateCart}></ProductBox>)
    });
    function calculateCart(num:any, price:any){
      setCartNum(cartNum+num);
      setCartPrice(cartPrice+price)
    }
return (
    <>
    <Cart cartNum={cartNum} cartPrice={cartPrice}></Cart>
    <div className="grid-container"> {productRenderList} </div>
    </>
)
}