import styled from 'styled-components/macro';
import * as ProductHeader from "./ProductHeader";






export default function ProductItem({product, selectProdcut}) {

    const handleSelect= ()=>{
        console.log("Product: "+product.name+" wurde ausgewählt")
    }
    return (
        <>
            <ProductCard>
                <Headline>
                    {product.name}
                </Headline>
                <Description>
                   GB: {product.gb} <br />
                   CPU: {product.cpu}
                </Description>
                <Button onClick={()=>{selectProdcut(product)}}>Select</Button>
            </ProductCard>
        </>
    )
}


const ProductCard = styled.div`
background-color: lightblue;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;
  cursor: grab;
`

const Description = styled.div`
  flex-wrap: wrap;
  text-align: center;
  margin: 5px;
  padding: 5px 22px;
`

const Headline = styled.div`
  flex-wrap: wrap;
  text-align: top;
  position:absolute;
  top: 4px;
  margin: 5px;
  padding: 5px 22px;
`


const Button = styled.button`
  position:absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
`