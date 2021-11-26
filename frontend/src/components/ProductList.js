//import ProductItem from "./ProductItem";
import {useEffect, useState} from "react";
import {getAllProducts} from "../service/productRepoService";
import {ProductHeader} from "./ProductHeader";
import {ProductBody} from "./ProductBody";
//import {compareProducts} from "../compares/ProductCompares";

export default function ProductList() {
const [allProducts,setAllProducts] = useState([])
    const [selectedProducts,setSelectedProducts] = useState([])

    console.log("Alle Produkte:", allProducts)
    console.log("Selected Products:", selectedProducts)

useEffect(() => {
    getAllProducts().then(products => setAllProducts(products))
},[])
    const selectProduct = (product)=>{
        console.log("Folgendes Produkt soll hinzugefügt werden."+product.name)
        if(!selectedProducts.includes(product) && selectedProducts.length < 2){
            setSelectedProducts([...selectedProducts, product])
        }
    }
/*
    const compare = ()=>{
        compareProducts(selectedProducts)
    }

 */
return (
    <div>
        <ProductHeader selectedProducts={selectedProducts} selectProduct={selectProduct}/>
        <ProductBody allProducts={allProducts} selectProduct={selectProduct}/>

    </div>
)
}