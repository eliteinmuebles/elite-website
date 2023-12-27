import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image from '../../assets/images/Card-img.jpg'
import notices from '../../mockData/notices';
import { useNavigate } from 'react-router-dom';

export const BlogComponent = () => {
  const navigate = useNavigate();

  const CardItem = ({ notice }) => (
    <Card style={{ width: '100%', margin: '1rem 0', backgroundColor: '#000', height: '100%', maxHeight: '600px' }}>
      <Row style={{ height: '100%' }}>
        {!notice.principalNotice && (
          <Col xs={6} style={{ padding: 0 }}>
            <Card.Img style={{ height: '100%', objectFit: 'cover' }} src={notice.imgSrc} />
          </Col>
        )}
        <Col xs={notice.principalNotice ? 12 : 6} style={{display: notice.principalNotice? "" : "flex"}}>
          {notice.principalNotice && (
            <Card.Img variant="top" src={notice.imgSrc} />
          )}
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <small style={{color:'white'}}>{notice.date}</small>
              <Card.Title style={{ fontSize: notice.principalNotice ? '48px' : '24px', fontWeight: 'bold', color: '#fff' }}>{notice.title}</Card.Title>
              {notice.principalNotice && (
                <Card.Text style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: notice.principalNotice ? 'space-between' : 'flex-end' }}>
              {notice.principalNotice && (
                <small style={{color:"white"}}> {notice.date}</small>
              )}
              <Button 
                variant="primary" 
                onClick={() => 
                navigate('/blog', 
                { state: { selectedNotice: notice, otherNotices: notices.filter(n => n !== notice) } })} 
                style={{ backgroundColor: '#D09426', color: '#000', fontWeight: 'normal' }}>
                Ver más...
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );

  return (
    <Container fluid style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '48px', color: '#000', fontWeight: 'bold' }}>Noticias del Mundo Inmobiliario</h1>
      <Row style={{ display: 'flex', flexDirection: 'row' }}>
        <Col xs={8} style={{ display:'flex', flexDirection:'column' }}>
          {notices.filter(notice => notice.principalNotice).map((notice, i) => (
            <CardItem key={i} notice={notice} />
          ))}
        </Col>
        <Col xs={4} style={{ display:'flex', flexDirection:'column'}}>
          {notices.filter(notice => !notice.principalNotice).map((notice, i) => (
            <CardItem key={i} notice={notice} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};


export default BlogComponent;