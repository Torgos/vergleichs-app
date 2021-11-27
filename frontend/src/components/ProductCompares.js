
import * as React from "react";
import styled from "styled-components/macro";


export function ProductCompares({selectedProducts}){

    const compare= (productStat,otherProductStat) => {
        if (productStat > otherProductStat){
            return(
                <Green>{productStat}</Green>
            )
        }else if(productStat < otherProductStat){
            return(
                <Red>{productStat}</Red>
            )
        }else {
            return(
                <Yellow>{productStat}</Yellow>
            )
        }
    }

    return(

            selectedProducts.length === 2 &&
            <>
                <ProductCard>
                    <Headline>
                        {selectedProducts[0].name}
                    </Headline>
                    <Description>

                        <div>GB: {compare(selectedProducts[0].gb,selectedProducts[1].gb)} </div>
                        <div>CPU: {compare(selectedProducts[0].cpu,selectedProducts[1].cpu)} </div>

                    </Description>
                </ProductCard>

                <ProductCard>
                    <Headline>
                        {selectedProducts[1].name}
                    </Headline>
                    <Description>

                        <div>GB: {compare(selectedProducts[1].gb,selectedProducts[0].gb)} </div>
                        <div>CPU: {compare(selectedProducts[1].cpu,selectedProducts[0].cpu)} </div>

                    </Description>
                </ProductCard>
            </>


    )
}







const HeaderContainer = styled.div`
background-color: #E0FFFF;
border-radius: 15px;
box-shadow: 5px 5px 10px lightgrey;
width: 67%;
margin: 20px auto;
display:flex;
position: relative;
justify-content:center;
align-items: center;
`
const Green = styled.div`
color: green;
`
const Yellow = styled.div`
color: yellow;
`
const Red = styled.div`
color: red;
`

const ProductCard = styled.div`
background-color: lightblue;
width: 23%;
height: 120px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px grey;
  
  position: relative;
  cursor: grab;
  justify-content: center;

`

const Description = styled.div`
  text-align: center;
  display: block;
  margin: 0px auto 10px auto;
  padding: 5px auto 10px;
`

const Headline = styled.div`
  text-align: center;
  display: block;
  text-shadow: 1px 1px grey;
  margin: 5px auto;
  padding: 0px;
  font-weight: 700;
`
const xButton = styled.button`
  width: 13%;
  height: 30px;
  margin: 0px 20px 0px 0px;
  cursor: pointer;
  :hover{background-color: lightblue;
  font-weight: bold;
  border: inset white;}
  
  border-radius: 10%;
 `