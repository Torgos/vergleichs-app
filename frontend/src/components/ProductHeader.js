//import ProductItem from "./ProductItem";
import * as React from "react";
import styled from "styled-components/macro";
import { Button,Modal} from 'react-bootstrap';
import {useState} from "react";
import {ProductCompares} from "./ProductCompares";


export function ProductHeader({selectedProducts, selectProduct}){


    return(
<HeaderContainer>
    {selectedProducts.length === 2 &&
        <ProductCompares selectedProducts = {selectedProducts}/>
    }
</HeaderContainer>
)
}




// <ProductItem key={item.id} product={item} selectProdcut={selectProduct}/>

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
const Green = styled.p`
color: green;
`
const Yellow = styled.p`
color: yellow;
`
const Red = styled.p`
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