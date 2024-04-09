import './Cart.css'
import '../../public/assets/cart-image.png'
export function Cart(props:any){
    return(
        <>
        <div className="cart">
        <img src="../../public/assets/cart-image.png" id="cart-img"></img>
        <br></br>
        <span>{props.cartNum}</span>
        <br></br>
        <span>{props.cartPrice}</span>
        </div>
        </>
    )
}