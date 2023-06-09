import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../Responsive";
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useState } from 'react'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../redux/page'

const Container=styled.div`
`

const Wrapper=styled.div`display:flex;
padding:50px;`
const ImageContainer=styled.div`
flex:1;
${mobile({ padding: "10px", flexDirection:"column" })}`
const Img=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh" })}`

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({ padding: "10px" })}`

const Title=styled.h1`
font-weight:200;`

const Desc=styled.p`
margin:20px 0px;`

const Price=styled.span`
font-size:40px;
font-weight: 500;`

const FilterContainer=styled.div`
width:50%;
display:flex;
margin: 30px 0px;
justify-content:space-between;
${mobile({ width: "100%" })}`

const Filter=styled.div`
display:flex;
align-items:center;`

const FilterTitle=styled.span`
font-size:20px;
font-weight: 400;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor: pointer;`

const FilterSize=styled.select`
margin-left: 10px;
padding: 2.5px;
`
const FilterSizeOption=styled.option`
`

const AddContainer=styled.div`
width: 50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ width: "100%" })}
`
const AmountContainer=styled.div`display:flex;
align-items:center;
font-weight:600;`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor: pointer;
&:hover{
    background-color: #f8f4f4;
}`
export default function Product() {
  const location=useLocation()
  const id=location.pathname.split("/")[2]
  const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [color,setColor]=useState("")
  const [size,setSize]=useState("")
  const dispatch=useDispatch()


  useEffect(()=>{
    const getProduct=async()=>{
      try{
        const res=await publicRequest.get(`${BASE_URL}/products/find/` + id)
        setProduct(res.data)
      }catch(err){

      }
    }
    getProduct()
  },[id]);

  const handleQuantity=(type)=>{
    if(type==="dec"){
      quantity>1 && setQuantity(quantity-1)
    }else{
      setQuantity(quantity+1)
    }
  }

  const handleClick=()=>{
    dispatch(addProduct({...product,quantity,color,size}))
  }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <ImageContainer>
        <Img src={product.img} />
        </ImageContainer>
        <InfoContainer>
        <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c)=>(
                  <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                ))}
                
                
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                  {product.size?.map((s)=>(
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
                </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
                <Remove onClick={()=>handleQuantity("dec")}/>
                <Amount>{quantity}</Amount>
                <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
