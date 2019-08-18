import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  width: 100%;
  padding: 20px 40px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Lexend Deca', sans-serif;
`

const Paragraph = ({ children }) => (
  <P>
    { children }
  </P>
)

export default Paragraph
