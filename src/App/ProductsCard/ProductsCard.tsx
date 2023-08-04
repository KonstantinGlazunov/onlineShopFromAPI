import React from "react";
import Products, { Product, Product as product } from "../Products/Products";

interface Props {
products: Product[],
index:number
}

export default function ProductsCard({products,index}: Props) {
  
    return (
    <div>
      <h2>Products Card</h2>
<ul>
    <li>
    {products[index].title}
    </li>
</ul>
    </div>
  );
}
