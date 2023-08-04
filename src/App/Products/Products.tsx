import React from 'react'
import ProductsCard from '../ProductsCard/ProductsCard';
import { useParams } from 'react-router-dom';
/* id,
    title,
  price,
  description,
  category,
  image */

export interface Product {
    id:number,
        title:string,
        price:number,
        description:string, 
        category:string,
        image:string,
        rating : {rate:number,
        count:number}
    }

    const serviceUrl= 'https://fakestoreapi.com/products';


export default async function Products() {
    
   // async function getProducts():Promise<void> {  //'эта функция асинхронная!!!!!!!!!!'
        const res: Response = await fetch(serviceUrl);
        const products:Product = await res.json();
      //}
     // getProducts();
    

const {id}= useParams();

    return (
            <div>
<h2>Products</h2>
<ProductsCard products={products} index={Number(id)}   /> 


    </div>
  )
}
