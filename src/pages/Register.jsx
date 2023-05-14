import React from 'react'
import { styled } from 'styled-components'
import img from '../images/bgregister.jpg'

const Container=styled.div`
width:100vw;
height: 100vh;

background:
linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/5625040/pexels-photo-5625040.jpeg??auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center ;
    background-size: cover;
    display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
padding: 20px;
width: 40%;
background-color: white;
`
const Form=styled.form`
display:flex;
flex-wrap:wrap;`
const Input=styled.input`
flex:1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding:8px;
`


const Title=styled.h1`
font-size:24px;
font-weight:400;`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
font-size: 15px;
cursor: pointer;
`
const Agreement=styled.span`
font-size: 15px;
margin:20px 0;
`
export default function Register() {
  return (

<Container >
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        <Input placeholder='First Name'/>
        <Input placeholder='Last Name'/>
        <Input placeholder='Username'/>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Input placeholder='Confirm Password'/>
        <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        <Button>Create</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}