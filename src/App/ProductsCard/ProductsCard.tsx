import React from "react";
import { ProductInt } from "../Products/Products";


interface Props {
products: ProductInt[],
index:number
}

export default function ProductsCard({products, index}: Props): JSX.Element {
  //console.log("TITLE= "+ products[index].title);
 // console.log("products[index]" + products[index]);
  
    return (
    <div>
      <h2>Products Card</h2>
<ul>
    <li>
     {/* {products[index].title} */}
    </li>
</ul>
    </div>
  );
}
