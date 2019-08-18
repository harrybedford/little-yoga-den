import React from 'react'
import styled from 'styled-components'
import swirls from './assets/footer-pattern.jpg'

const Pattern = styled.div`
  width: 100%;
  height: 40px;
  background-image: url(${swirls});
  border-bottom: 3px solid black;
  position: fixed;
  bottom: 0;
  opacity: 0.8;
`

const Footer = () => (
  <footer>
    <Pattern />
  </footer>
)

export default Footer
