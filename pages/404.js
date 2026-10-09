import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 — DJRLABS</title>
        <meta name="theme-color" content="#03060c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbA}`} />
        <div className={`${styles.orb} ${styles.orbB}`} />
      </div>
      <main
        className={styles.pageShell}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={styles.showcaseCard} style={{ maxWidth: 420, textAlign: 'center' }}>
          <p className={styles.kicker} style={{ justifyContent: 'center' }}>
            Signal lost
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', margin: '12px 0' }}>
            404
          </h1>
          <p className={styles.lead} style={{ margin: '0 auto 24px' }}>
            That page drifted out of range. Head back to the studio.
          </p>
          <a className={styles.primaryButton} href="/">
            Return home
          </a>
        </div>
      </main>
    </>
  );
}
