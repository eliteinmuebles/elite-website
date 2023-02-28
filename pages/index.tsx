import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Searcher } from '../components/SearcherContainer'
import { About } from '../components/AboutContainer'
import { Page } from '../components/Page'
import { BlogSlider } from '../components/BlogSlider'
import { EstateCard } from '../components/EstateCard'
import { FeatureTest } from '../components/FeaturesTest'
import { Market } from '../components/Market'
import { AgentSlider } from '../components/AgentsSlider'

export default function Home() {
  return (
    <Page>
        <Searcher/>
        <FeatureTest/>
        <AgentSlider/>
        <About/>
        <Market/>
        <BlogSlider/>      
    </Page>
    
  )
}
