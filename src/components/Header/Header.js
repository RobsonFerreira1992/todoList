import React from 'react'
import { Cabecalho } from './styles'
import Logo from '../../imagens/logo-emix.svg'
const Header = () => {
  return (
    <Cabecalho>
        <h1>Todo<span>List</span></h1>
        <img src={Logo} alt="Logo e.mix"/>
    </Cabecalho>
  )
}

export default Header
