import React from 'react'
import styled from 'styled-components'

const StyledSession = styled.div`
  width: 90%;
  height: 600px;
  border: 3px solid black;
  margin: 0 5% 40px;
  @media screen and (min-width: 800px) {
    width: 30%;
    margin: 0 1.66666% 40px;
    float: left;
  }
`

const Img = styled.img`
  width: 100%;
  border-bottom: 3px solid black;
`

const H2 = styled.h2`
  padding: 8px;
  font-size: 24px;
  line-height: 28px;
  font-family: 'Lexend Deca', sans-serif;
`

const P = styled.p`
  padding: 8px;
  font-size: 24px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Lexend Deca', sans-serif;
`

const Session = ({ title, description, img}) => (
  <StyledSession>
    <Img src={img} alt={title} />
    <H2>{ title }</H2>
    <P>{ description }</P>
  </StyledSession>
)

export default Session
