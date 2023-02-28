import styles from './AgentSlider.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { CardAgent } from '../CardAgent';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useScreenSize';

const mockAgentData = [
    [{
        id: 1,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id: 2,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id:3,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },],
    [{
        id:4,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id:5,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id:6,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },],
    [{
        id:7,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id:8,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },
    {
        id:9,
        agentName : 'Fernando',
        agentLastName: 'Perez',
        agentImage: 'images/fotoperfil1.jfif',
        agentPhone: '0414400354',
        agentEmail: 'fernando@gmail.com'
    },]
    
]


export const AgentSlider = () => {
    
    const screen = useWindowSize()
    const [cardEstateWidth, setCardEstateWidth] = useState("280px")

    useEffect(() => {
        if (screen && screen.width? screen.width <= 576 : null) {
          setCardEstateWidth("330px")
        };
        if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
          setCardEstateWidth("340px")
        };
        if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
          setCardEstateWidth("290px")
         
        };
        if (screen && screen.width? screen.width >= 1200   : null) {
         
        };
        console.log(screen)
       }, [screen])
    return (
        <>
         <div style={{backgroundColor: "#383636"}}>
            <h1 className="agent-title">Agentes</h1>
                <Carousel>
                {mockAgentData.map((agents, index) => (
                    <Carousel.Item key={`agents-${index}`}>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-5">
                            {agents.map((agent)=> (
                                <CardAgent
                                    width={cardEstateWidth}
                                    agentName={agent.agentName}
                                    agentLastName={agent.agentLastName}
                                    agentImage={agent.agentImage}
                                    agentPhone={agent.agentPhone}
                                    agentEmail={agent.agentEmail}
                                />
                            ))}
                        </div>
                    </Carousel.Item> 
                    ))} 
                </Carousel>
            </div>
        </>
    )
}