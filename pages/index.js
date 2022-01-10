import React from "react";
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>joureka Website</title>
        <meta name="description" content="This is where the marketing website of the joureka project lives." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Mit mehr Muße vom Interview zum Artikel!</div>
        <h1 className={styles.title}>
          Willkommen zu joureka
        </h1>
        <div className="w-50 alert alert-secondary mt-4" role="alert">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <FontAwesomeIcon size="3x" icon={faWrench}></FontAwesomeIcon>
            <div className="d-flex flex-column justify-content-center align-items-center px-4">
              <h5 className="text-uppercase">Website im Aufbau</h5>
              <div>Wir sind fast soweit!</div>
            </div>
          </div>
        </div>
       </main>
    </div>
  )
}
