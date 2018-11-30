import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
/* import Image from '../components/image' */
import Podcasts from '../components/podcasts'

const IndexPage = () => (
  <Layout>
    <h1>Ranking</h1>
    <p>Datos obtenidos de <a
      href="https://www.ivoox.com/podcast-internet-tecnologia_sc_f445_1.html">
        categoría "Tecnología" de iVoox
      </a>
    </p>
    <Podcasts />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
