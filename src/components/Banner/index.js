import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  border-bottom: 3px solid black;
`

const Banner = ({ img, text }) => (
  <div className="banner">
    <Img src={img} alt="banner" />
    <p>{ text }</p>
  </div>
)

export default Banner
