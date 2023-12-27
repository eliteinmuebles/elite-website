import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import FeaturedProperties from "../../components/FeaturedProperties/featured-properties";

export const BlogPage = () => {
  const { state } = useLocation();
  const { selectedNotice, otherNotices } = state;
  const navigate = useNavigate();

  const CardItem = ({ notice }) => (
    <Card style={{ width: '100%', margin: '1rem 0', backgroundColor: '#000', height: '100%', maxHeight: '600px' }}>
      <Row style={{ height: '100%' }}>
        <Col xs={6} style={{ padding: 0 }}>
          <Card.Img style={{ height: '100%', objectFit: 'cover' }} src={notice.imgSrc} />
        </Col>
        <Col xs={6} style={{display: "flex"}}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <small style={{color:'white'}}>{notice.date}</small>
              <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>{notice.title}</Card.Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" onClick={() => console.log(notice)} style={{ backgroundColor: '#D09426', color: '#000', fontWeight: 'normal' }}>Ver más...</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
  

  return (
    <>
      <Container style={{paddingTop:"8rem"}}>   
            <h1 style={{fontSize:"48px", fontWeight:"bold"}}>{selectedNotice.title}</h1>
            <p style={{color:"#D09426", fontSize:"32px"}}>{selectedNotice.date}</p>
            <Row>
                <Col >
                    <img src={selectedNotice.imgSrc} style={{width:'100%', height:'100%'}} alt="Imagen primcipal" />
                </Col>
                <Col  style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{fontSize:"32px", fontWeight:"bold"}}>Otras noticias</h2>
                    {otherNotices.map((notice, i) => (
                    <CardItem key={i} notice={notice} />
                    ))}
                </Col>
            </Row>
            <Row style={{marginBlock:'1rem'}}>
              <h1 style={{fontSize:"32px", fontWeight:"bold"}}>{selectedNotice.title}</h1>
              <p>{selectedNotice.completeNotice}</p>
            </Row>
      </Container>
      <FeaturedProperties />
    </>
  );
};
