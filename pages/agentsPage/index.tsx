import styles from './agentsPage.module.css'
import Link from 'next/link'
import { CardAgent } from '../../components/CardAgent'
import { useEffect, useState } from 'react'
import { Page } from '../../components/Page'
import useWindowSize from '../../hooks/useScreenSize'
import { ContentTop } from '../../components/ContentTop'

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


export const agentsPage = () => {
   
    const [info, setInfo] =  useState([...mockAgentData].slice(0,mockAgentData.length));
   const [cardEstateWidth, setCardEstateWidth] = useState("340px")
   const [cardEstateHeight, setCardEstateHeight] = useState("340px")
   const screen = useWindowSize()
   
   useEffect(() => {
        const value = [...mockAgentData].length
        setInfo([...mockAgentData].slice(0,value))
       }, [])
    

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
        <Page>
            <ContentTop/>
            <div className="row" style={{backgroundColor:" #383636"}}>
                <div className={styles['estates-container']} >
                    {info.map((agents, index) => (
                        <div className='d-flex flex-row justify-content-center align-items-center gap-5 mb-4 mt-4 '>
                            {agents.map((agent) => (
                            <CardAgent
                                key={agent.id}
                                width={cardEstateWidth}
                                heigth={cardEstateHeight}
                                agentName={agent.agentName}
                                agentLastName={agent.agentLastName}
                                agentImage={agent.agentImage}
                                agentPhone={agent.agentPhone}
                                agentEmail={agent.agentEmail}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Page>
        </>
    )
}

export default agentsPage;