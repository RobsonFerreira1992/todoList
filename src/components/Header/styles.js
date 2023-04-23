import styled from 'styled-components';

export const Cabecalho = styled.header`
  width: 100%;
  height: 80px;
  padding: 10px 25px ;
  background-color:#006a6a;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    text-transform:uppercase;
    font-weight: 800;
  }
  h1 span{
    font-family: sans-serif;
    font-weight: 300;
  }

  img{
    width: 150px;
  }
`