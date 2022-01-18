import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project4</title>
        <meta property="og:title" content="New Project4" />
      </Helmet>
    </div>
  )
}

export default Home
