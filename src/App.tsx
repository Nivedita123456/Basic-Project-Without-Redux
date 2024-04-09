import { Product } from "./components/Product"
import {ProductDetail} from "./components/ProductDetail"
import { BrowserRouter , Routes, Route} from "react-router-dom"
export interface IProps{
  name:string,
  initialCount:number
  }
const propsData:IProps = {
  initialCount: 10,
  name:"BalaJi"
}
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Product/>}></Route>
   <Route path="/products/:id/" element={<ProductDetail></ProductDetail>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
