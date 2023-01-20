import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Searcher } from '../components/SearcherContainer'
import { FeaturesEstates } from '../components/FeaturesEstates'
import { About } from '../components/AboutContainer'
import { ZoneSliding } from '../components/ZoneSliding'
import { Page } from '../components/Page'
import { BlogSlider } from '../components/BlogSlider'

export default function Home() {
  return (
    <Page>
        <Searcher/>
        <FeaturesEstates/>
        <About/>
        <ZoneSliding/>
        <BlogSlider/>
    </Page>
  )
}
