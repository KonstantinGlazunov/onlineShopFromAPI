import React, { useEffect, useState } from 'react'
import ProductsCard from '../ProductsCard/ProductsCard';
import { useParams } from 'react-router-dom';
import { log } from 'console';
import { arr } from '../Arr/Array';
import { ProductData } from '../DataInt/DataInt';
/* id,
    title,
  price,
  description,
  category,
  image */

export interface ProductInt {
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

const data:ProductData={
  products:[]
};
export default  function Products() {
    const [productData, setProducts] = useState<ProductData>(data);
   
    async function getProducts():Promise<void> {  
      const res: Response = await fetch(serviceUrl);
      const arr:ProductInt[] = await res.json();   
      setProducts({...productData, products:arr});
      
    }
    useEffect(()=>{ getProducts() },[])

    function productHandler(){
      const{products}=productData;
      return products;
    }

    const products =  productHandler();  //а этот не работатет... 
    // const products = arr;  //если загрузить массив из Array.ts - работатет 
    
    const {id}= useParams();

    //______ ОШИБКА при обращении к title _____ 
    //иногда и id иногда если закоментировать обновить страницу и разкомментировать, то показывает
    // при следующем обновлении выдает ошибку... 
    console.log("Number(id)" + Number(id));
    console.log("products= " + products[1].title);
   


    return (
            <div>
<h2>Products</h2>
<ProductsCard products={products} index={Number(id)}   /> 


    </div>
  )
}
