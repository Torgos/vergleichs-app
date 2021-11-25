import ProductItem from "./ProductItem";
import * as React from "react";
import styled from "styled-components/macro";


export function ProductHeader({selectedProducts, selectProduct}){
    return(
<HeaderContainer>
    { selectedProducts?.map((item) => {
        return <ProductItem key={item.id} product={item} selectProdcut={selectProduct}/>
    }) }
</HeaderContainer>
)
}
const HeaderContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
`