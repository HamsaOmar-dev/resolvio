import Head from 'next/head';
import styles from '@/styles/Landing.module.css';
import Landing from '@/component/landing';
import 'antd/dist/reset.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resolvio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Landing />
      </main>
    </>
  )
}
