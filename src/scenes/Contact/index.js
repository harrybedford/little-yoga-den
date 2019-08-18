import React, { Fragment } from 'react'
import { Header, Banner, Paragraph, Title, Picture } from '../../components';
import bannerImage from '../../assets/images/banner.jpg'
import contactImage from './assets/leanne.jpg'

const Contact = () => (
  <Fragment>
    <Header page="contact" />
    <Banner img={bannerImage} />
    <Title>Contact the Den</Title>
    <Paragraph>
      If you have any queries or want to book a session please contact us...
    </Paragraph>
    <Paragraph>
      Yogi Leanne<br />
      Phone: 0711111111<br />
      Email: leanne@littleyogaden.com
    </Paragraph>
    <Picture src={contactImage} />
    <Paragraph>
      We can maybe change this image... tho it is one of my favourites of you ;) Happy Birthday
    </Paragraph>
  </Fragment>
)

export default Contact
