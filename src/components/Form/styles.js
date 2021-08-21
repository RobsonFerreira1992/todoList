import styled from 'styled-components'


export const ContainerForm = styled.div`
 padding: 50px 0px;
 text-align:center;
  input{
  width: 85%;
  padding: 10px 15px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border:1px solid #9e9d9d;
    box-shadow: 0 0 10px #9e9d9d;
    
    }
  }
  button{
   border: none;
   width: 15%;
   background-color: #36afd1;
   padding: 10px;
   font-size: 16px;
   color: #fff;
   font-weight: 600;
  }
  @media(max-width:767px){
    input{
      width: 70%;
    }
    button{
      width: auto;
    }
  }
`

