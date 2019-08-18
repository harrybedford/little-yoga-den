import React, { Fragment } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  padding: 20px 40px;
`

const Picture = ({ src, name }) => (
  <Fragment>
    <Img src={src} alt={name} />
  </Fragment>
)

export default Picture
