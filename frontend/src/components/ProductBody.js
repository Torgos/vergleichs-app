import * as React from 'react';
import ProductItem from "./ProductItem";

export function ProductBody ({allProducts, selectProduct}) {


    return (
        <div>
            { allProducts?.map((item) => {
                return <ProductItem key={item.id} product={item} selectProdcut={selectProduct}/>
            }) }
        </div>
    );
};