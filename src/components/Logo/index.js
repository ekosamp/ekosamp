import React from 'react'
import Link from 'gatsby-link'
import Circle from './logo.svg'
import { Wrapper } from './style'

const Logo = () =>
  <Wrapper>
    <div>
      <Link to='/'><Circle width={70} height={70} /></Link>
      <div className="circle" />
    </div>
  </Wrapper>

export default Logo
