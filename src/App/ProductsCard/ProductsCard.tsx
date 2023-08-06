import React from "react";
import { ProductInt } from "../Products/Products";
import styles  from "./ProductCard.module.css"


interface Props {
products: ProductInt[],
index:number
}

export default function ProductsCard({products, index}: Props): JSX.Element {
if (index <= products.length-1){
  return (
    <div>
      <h2>{products[index].title}</h2>
      <img className= {styles.image} src = {products[index].image} alt={products[index].title}/> 
      
      

      <ul>
    <li> {products[index].description} </li>
     <h2>{products[index].price}'$'</h2>
      </ul>

    </div>
  );
} else {
  return (<>Server Array/JSON  Error  </>)
}
}
