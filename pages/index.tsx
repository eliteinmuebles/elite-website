import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Searcher } from '../components/SearcherContainer'
import { About } from '../components/AboutContainer'
import { Page } from '../components/Page'
import { BlogSlider } from '../components/BlogSlider'
import { EstateCard } from '../components/EstateCard'
import { FeatureEstates } from '../components/FeaturesEstates'
import { Market } from '../components/Market'
import { AgentSlider } from '../components/AgentsSlider'
import { AboutAgents } from '../components/AgentsContainer'
import { Reviews } from '../components/Reviews'


export default function Home() {
  return (
    <Page>
        <Searcher/>
        <FeatureEstates/>
        <AboutAgents/>
        <Market/>
        <About/>
        <BlogSlider/>      
        <Reviews/>
    </Page>
    
  )
}
