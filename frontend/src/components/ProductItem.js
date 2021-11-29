import styled from 'styled-components/macro';
//import * as ProductHeader from "./ProductHeader";






export default function ProductItem({product, selectProdcut}) {
/*
    const handleSelect= ()=>{
        console.log("Product: "+product.name+" wurde ausgewählt")
    }

 */
    return (
        <>
            <ProductCard>
                <Headline>
                    {product.name}
                </Headline>
                <Description>
                   <p>GB: {product.gb} </p>
                    <p>CPU: {product.cpu}</p>
                </Description>
                <Button onClick={()=>{selectProdcut(product)}}>Select</Button>
            </ProductCard>
        </>
    )
}


const ProductCard = styled.div`
  width: 65%;
  background-color: lightblue;
  margin: 20px auto 20px auto;
  padding: 10px;
  justify-content: center;
  box-shadow: 5px 5px 10px grey;
  align-items: center;
  border-radius: 15px;
  position: relative;
  cursor: grab;
`
//flex-wrap: wrap;
const Description = styled.div`
  text-align: center;
  margin: 0px auto 10px auto;
  padding: 5px auto 10px;
`

const Headline = styled.div`
  text-align: center;
  text-shadow: 1px 1px grey;
  margin: 5px auto 5px auto;
  padding: 10px;
  font-weight: 700;
`

const Button = styled.button`
  position:absolute;
  top: 10px;
  right: 10px;
  
  border-radius: 10%;
  width: 70px;
  height: 30px;
  cursor: pointer;
  :hover{background-color: #9ac0cd;
  font-weight: bold;
  border: inset white;}
`