import React, { Fragment } from 'react'
import { Header, Banner, Paragraph, Title, Session } from '../../components'
import bannerImage from '../../assets/images/banner.jpg'
import sessionImage from './assets/session-image.jpg'

const Sessions = () => (
  <Fragment>
    <Header page="sessions" />
    <Banner img={bannerImage} />
    <Title>Sessions We Offer</Title>
    <Paragraph>
      Have a browse below at the different sessions we offer at the hut and see if you can find one that will suit your little yogi...
    </Paragraph>
    <Session
      img={sessionImage}
      title="Stretch & Shake"
      description="When you want to stretch but you also want to shake..."
    />
    <Session
      img={sessionImage}
      title="Downward Jumping Frog"
      description="Ever wondered why frogs are such happy creatures... this is your time to find out why"
    />
    <Session
      img={sessionImage}
      title="Play-lates"
      description="Like pilates but find it boring... time to try Play-lates"
    />
    <Session
      img={sessionImage}
      title="Eight Nine Zen"
      description="Time to find your inner-zen"
    />
    <Session
      img={sessionImage}
      title="Nam-mas-Day"
      description="An intro to all things yoga on your Nam-as-Day"
    />
  </Fragment>
)

export default Sessions
