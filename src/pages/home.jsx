import React from 'react'
import { Carousel } from 'antd';
import '../layout/Layout.css'
import { Col, Row } from 'antd';

const Home = ({change}) => {
  console.log("home",change); 
  return (
    <>
      <Carousel className='logos' autoplay>
    <div>
    <center><img style={{width: '60%'}} src="abc.png" alt="anasayfa"></img></center>
    </div>
    <div>
    <center><img style={{width: '60%'}} src="mnd.png" alt="anasayfa"></img></center>
    </div>
    <div>
    <center><img style={{width: '60%'}} src="abcd.jpg" alt="anasayfa"></img></center>
    </div>
    <div>
    <center><img style={{width: '60%'}} src="abcde.png" alt="anasayfa"></img></center>
    </div>
  </Carousel>
    <Row>
      <Col className='brands' span={24}>
        <h2 style={{marginLeft: '10%'}}>MARKALAR</h2>
        
        <div className='myLogos'>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="apple.png" alt="anasayfa"></img>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="samsung.png" alt="anasayfa"></img>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="hp.png" alt="anasayfa"></img>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="apple.png" alt="anasayfa"></img>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="samsung.png" alt="anasayfa"></img>
      <img style={{borderRadius:'50%', height:'150px', width:'150px', objectFit:'cover'}} src="apple.png" alt="anasayfa"></img>
      </div>
        </Col>
    </Row>
    </>
    
  )
}

export default Home
