import React, { Fragment } from 'react'
import { Header, Title, Banner, Paragraph } from '../../components'
import bannerImage from '../../assets/images/banner.jpg'

const About = () => (
  <Fragment>
  <Header page="about" />
  <Banner img={bannerImage} />
  <Title>About the Den</Title>
  <Paragraph>
    On this page you can give lots of details about who you are and why you are the kids yoga queen!
  </Paragraph>
  <Paragraph>
    You can maybe put a picture here... 
  </Paragraph>
  <Paragraph>
    Bit more about you here etc etc :)
  </Paragraph>
</Fragment>
)

export default About
