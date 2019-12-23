import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
    <NavItem>
        <NavLink to='/'>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/works'>Works</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink to='/profile'>Profile</NavLink>
      </NavItem> */}
      <NavItem highlight><EmailMe text="Get In Touch"/>
    </NavItem>
      
    </Nav>
    <Nav>
    <NavItem>
        <a href="https://twitter.com/eko_sampoerna" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
      <NavItem>
        <a href="https://dribbble.com/ekosampoerna" rel="noopener noreferrer" target="_blank">Dribbble</a>
      </NavItem>
      <NavItem>
        <a href="https://www.instagram.com/eko_samp/" rel="noopener noreferrer" target="_blank">Instagram</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/ekosamp" rel="noopener noreferrer" target="_blank">Behance</a>
      </NavItem>
    </Nav>
  </Wrapper>

export default Menu
