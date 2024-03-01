import React from 'react'
import {Col,Row,Container} from "react-bootstrap"
import Video from '../components/Video/Video'
import Categories from '../components/Categories/Categories'


const latest = () => {
  return (
    <div>
      <Container>
     <Categories/>
    <Row>
        {
            [...new Array(20)].map(()=>(<Col lg={3} md={4}>
            <Video/>
            </Col>)
       ) }
    </Row>
    </Container>
    </div>
  )
}

export default latest
