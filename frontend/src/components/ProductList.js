import ProductItem from "./ProductItem";
import {useEffect, useState} from "react";
import {getAllProducts} from "../service/productRepoService";

export default function ProductList() {
const [allProducts,setAllProducts] = useState([])


useEffect(() => {
    getAllProducts().then(products => setAllProducts(products))
},[])
return (
    <div>
    { allProducts?.map((item) => {
            return <ProductItem product={item}/>
        }) }
    </div>
)
}