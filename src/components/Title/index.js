import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  width: 100%;
  padding: 20px 40px;
  font-size: 32px;
  line-height: 40px;
  font-family: 'Lexend Deca', sans-serif;
  text-align: center;
`

const Title = ({ children }) => (
  <H1>
    { children }
  </H1>
)

export default Title
