import React, { Fragment } from 'react'
import { Header, Banner, Paragraph } from '../../components'
import bannerImage from '../../assets/images/banner.jpg'

const Home = () => (
  <Fragment>
    <Header page="home" />
    <Banner img={bannerImage} />
    <Paragraph>
      Leanne's Little Yoga Den is based in Doncaster, South Yorkshire. Find out more about how your little one
      can benefit from this anicient Indian practice here.
    </Paragraph>
    <Paragraph>
      So here's a little starter website to give you a boost with the Little Yoga Den!
    </Paragraph>
    <Paragraph>
      I can show you how to update it youself and edit things and you can learn a little coding as go :)
    </Paragraph>
    <Paragraph>
      As you can see it's a little rough around the edges but we can make it just how you want it!!!
    </Paragraph>
  </Fragment>
)

export default Home
