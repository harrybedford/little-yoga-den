import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.jpg'
import pattern from './assets/background-pattern.jpg'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 231px;
  padding: 20px 0 0;
  box-sizing: border-box;
`

const Logo = styled.img`
  width: 240px;
  margin: auto;
  display: block;
  margin-bottom: 20px;
`

const Nav = styled.nav`
  background-color: black;
  background-image: url(${pattern});
  height: 41px;
  width: 100%;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  ul {
    display: block;
    margin: 0 auto;
    width: 480px;;
    li {
      width: 120px;
      text-align: center;
      background-color: black;
      border-right: 1px solid white;
      float: left;
      &:nth-child(1) {
        border-left: 1px solid white
      }
      &:hover {
        background-color: white;
        color: black;
      }
      a {
        text-decoration: none;
        color: white;
        display: block;
        width: 100%;
        height: 100%;
        padding: 8px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        &:hover {
          color: black;
        }
      }
    }
  }
`

const Header = ({ page }) => {
  const [sideMenu, setSideMenu] = useState(false)
  return (
    <StyledHeader>
      <Logo src={logo} alt="Little Yoga Den" />
      <Nav className={sideMenu ? 'sideMenu' : ''}>
        <ul>
          <li className={page === 'home' ? 'active' : ''}>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className={page === 'about' ? 'active' : ''}>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li className={page === 'sessions' ? 'active' : ''}>
            <NavLink to="/sessions">
              Sessions
            </NavLink>
          </li>
          <li className={page === 'contact' ? 'active' : ''}>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
      <button onClick={() => setSideMenu(!sideMenu)}>
        Menu
      </button>
    </StyledHeader>
  )
}

export default Header
