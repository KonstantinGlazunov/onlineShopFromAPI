import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { useParams } from "react-router-dom";

export interface ProductInt {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
type Rating = { rate: number; count: number, };

const serviceUrl = "https://fakestoreapi.com/products";


export default function Products(): JSX.Element {
  const [products, setProducts] = useState<ProductInt[]>([]);

  async function getProducts(): Promise<void> {
    const res: Response = await fetch(serviceUrl);
    const arr: ProductInt[] = await res.json();    //это не массив а объект JSONов в котором 20 объект  
   

    setProducts(arr);


  }
  useEffect(() => {getProducts()}, []);

  const { index } = useParams();

 // console.log('products[1]= ', products[1].category);
  //console.log("products= ", JSON.stringify(products[1]));

  return (
    <div>
      <ProductsCard products={products} index={Number(index)} />
    </div>
  );
}
