import React from 'react'
import * as S from './style'

type Props = {
  children:React.ReactNode
}

const Button = ({children}:Props) => {
  return (
    <S.StyledButton>{children}</S.StyledButton>
  )
}

export default Button