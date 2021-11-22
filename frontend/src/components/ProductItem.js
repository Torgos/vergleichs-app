import styled from 'styled-components/macro';



export default function ProductItem({product}) {
console.log(product.name)
    return (
        <>
            <ProductCard>

                <Description></Description>
                <Button onclick></Button>
            </ProductCard>
        </>
    )}

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


const Button = styled.button`
  justify-self: left;
  cursor: pointer;
`