import { useState } from "react";
import { Link } from "react-router-dom";
export function ProductBox({product, onAddOrRemove}:any){
    const productId = "products/"+product.id;
    const [count, setCount] = useState(0)
    return (<div  className="grid-item">
            <h2>{product.name}</h2>
            <span>{product.type}</span>
            <div>{product.price}</div>
            <br></br>
            <Link to={productId}><button>View Product Details</button></Link>
            <button onClick={()=>{setCount(count+1);onAddOrRemove(1, product.price);}}>+</button>
            {count==0? <span>Add to Cart</span>:<span>{count}</span>}
            <button onClick={()=>{if(count>0){setCount(count-1);onAddOrRemove(-1,-1*product.price);}}}>-</button>
        </div>
    )
}