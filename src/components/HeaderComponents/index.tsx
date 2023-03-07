import React from 'react'
import * as S from './style'

type Props = {
    text?:string
}

const Button = ({text}: Props) => {
  return (
    <S.StyledButton>{text}</S.StyledButton>
  )
}

export default Button