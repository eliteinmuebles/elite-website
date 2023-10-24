import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image from '../../assets/images/Card-img.jpg'

const BlogComponent = () => {
  const notices = [
    { imgSrc: image, title: "Titulo Grande", date: "Fecha de publicación", principalNotice: true },
    { imgSrc: image, title: "Titulo 1", date: "Fecha de publicación", principalNotice: false },
    { imgSrc: image, title: "Titulo 2", date: "Fecha de publicación", principalNotice: false },
    { imgSrc: image, title: "Titulo 3", date: "Fecha de publicación", principalNotice: false }
  ];
  const CardItem = ({ imgSrc, title, date, principalNotice }) => (
    <Card style={{ width: '100%', margin: '1rem 0', backgroundColor: '#000', height: '100%', maxHeight: '600px' }}>
      <Row style={{ height: '100%' }}>
        {!principalNotice && (
          <Col xs={6} style={{ padding: 0 }}>
            <Card.Img style={{ height: '100%', objectFit: 'cover' }} src={imgSrc} />
          </Col>
        )}
        <Col xs={principalNotice ? 12 : 6} style={{display: principalNotice? "" : "flex"}}>
          {principalNotice && (
            <Card.Img variant="top" src={imgSrc} />
          )}
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <small style={{color:'white'}}>{date}</small>
              <Card.Title style={{ fontSize: principalNotice ? '48px' : '24px', fontWeight: 'bold', color: '#fff' }}>{title}</Card.Title>
              {principalNotice && (
                <Card.Text style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: principalNotice ? 'space-between' : 'flex-end' }}>
              {principalNotice && (
                <small style={{color:"white"}}> {date}</small>
              )}
              <Button variant="primary" style={{ backgroundColor: '#D09426', color: '#000', fontWeight: 'normal' }}>Ver más...</Button>
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
            <CardItem key={i} {...notice} />
          ))}
        </Col>
        <Col xs={4} style={{ display:'flex', flexDirection:'column'}}>
          {notices.filter(notice => !notice.principalNotice).map((notice, i) => (
            <CardItem key={i} {...notice} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogComponent;