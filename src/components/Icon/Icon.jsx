import React from 'react'
import IconContainer from './styled-components/IconContainer'
import Image from 'next/image'

const Icon = ({img,click,onClick}) => {
  return (
    <IconContainer onClick={onClick}>
        <Image alt='Icon' src={img} width={'25'} height={'25'}/>
    </IconContainer>
  )
}

export default Icon