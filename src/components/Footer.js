import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

import { StyledLink } from './styled/StyledLink'
import { Container } from './styled/Container'
import { Logo } from './styled/Logo'

const FooterContent = styled.div`
  width: 100%;
  background-color: ${colors.black};
  margin-top: 2rem;
`

const FooterContainer = Container.extend`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  align-items: center;
  background-color: ${colors.black};
`

const Footer = () => {
  return (
    <FooterContent>
      <FooterContainer>
        <Logo />
        <div>Center</div>
        <div>
          <div>IG</div>
          <div>FB</div>
        </div>
      </FooterContainer>
    </FooterContent>
  )
}

export default Footer