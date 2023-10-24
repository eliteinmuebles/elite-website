import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import agent1 from '../../assets/agents/Group 31.jpg'
import agent2 from '../../assets/agents/Group 32.jpg'
import agent3 from '../../assets/agents/Group 33.jpg'
import agent4 from '../../assets/agents/Group 36.jpg'
import agent5 from '../../assets/agents/Group 37.jpg'
import agent6 from '../../assets/agents/Group 38.jpg'
import ModalAgents from '../ModalAgents';

const asesores = [
   { id:1, nombre: 'Nombre del asesor', foto: agent1 },
   { id:2, nombre: 'Nombre del asesor', foto: agent2 },
   { id:3, nombre: 'Nombre del asesor', foto: agent3 },
   { id:4, nombre: 'Nombre del asesor', foto: agent4 },
   { id:5, nombre: 'Nombre del asesor', foto: agent5 },
   { id:6, nombre: 'Nombre del asesor', foto: agent6 },
];

const Asesores = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <Container fluid style={{ backgroundColor: 'black', color: '#D09426', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '48px' }}>Conoce a nuestros asesores</h1>
      <Row className="justify-content-md-center">
        {asesores.map((item) => (
          <Col key={item.id} md={4} className="text-center">
            <img src={item.foto} alt={item.nombre} className="agent-image m-2" onClick={() => setSelectedAgent(item)} />
          </Col>
        ))}
      </Row>

      {selectedAgent && (
        <ModalAgents
          show={!!selectedAgent}
          onHide={() => setSelectedAgent(null)}
          image={selectedAgent.foto}
          nombre={selectedAgent.nombre}
        />
      )}
    </Container>
  );
};

export default Asesores;
