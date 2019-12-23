import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made with love and coffee - {getCurrentYear()}
    </Item>
    <Item position='right'>
     
    </Item>
  </Wrapper>

export default Footer
