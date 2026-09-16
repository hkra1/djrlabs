import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const starterCode = `const app = document.querySelector('#app');
app.innerHTML = '<h2>Hello from DJR Labs</h2><p>Edit this code and press Run.</p>';

// Try changing the page:
// document.body.style.background = '#101827';`;

export default function Home() {
  const [code, setCode] = useState(starterCode);
  const [hasRun, setHasRun] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('djrlabs-code');
    if (saved) setCode(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('djrlabs-code', code);
  }, [code]);

  function runCode() {
    setHasRun(true);
    const escaped = code.replace(/<\\/script/gi, '<\\\\/script');
    frameRef.current.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:1rem;color:#e5e7eb;background:#111827}#app{line-height:1.5}pre{white-space:pre-wrap;color:#fca5a5}</style></head><body><div id="app"></div><script>try { ${escaped} } catch (error) { document.body.innerHTML = '<pre>' + error.stack + '</pre>'; }</script></body></html>`;
  }

  function resetCode() {
    setCode(starterCode);
    setHasRun(false);
    frameRef.current.srcdoc = '';
    window.localStorage.removeItem('djrlabs-code');
  }

  return (
    <>
      <Head>
        <title>DJR Labs — Web IDE</title>
        <meta name="description" content="A lightweight browser-based JavaScript playground from DJR Labs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <header className={styles.header}>
          <div><span className={styles.badge}>DJR</span><span className={styles.brand}>LABS</span></div>
          <span className={styles.status}><i /> Browser IDE</span>
        </header>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>BUILD · EXPERIMENT · SHIP</p>
          <h1>Your ideas,<br /><span>running in the browser.</span></h1>
          <p className={styles.intro}>A focused JavaScript playground for quick experiments and creative prototypes. No setup required.</p>
        </section>
        <section className={styles.workspace} aria-label="JavaScript workspace">
          <div className={styles.panel}>
            <div className={styles.panelHead}><span>script.js</span><span className={styles.language}>JavaScript</span></div>
            <textarea aria-label="JavaScript editor" spellCheck="false" value={code} onChange={(event) => setCode(event.target.value)} />
          </div>
          <div className={styles.panel}>
            <div className={styles.panelHead}><span>preview</span><span className={styles.live}>{hasRun ? '● live' : 'ready'}</span></div>
            <iframe ref={frameRef} title="Code preview" sandbox="allow-scripts" />
          </div>
        </section>
        <div className={styles.actions}><button className={styles.run} onClick={runCode}>▶ Run code</button><button className={styles.reset} onClick={resetCode}>Reset</button><span className={styles.saved}>Saved locally in your browser</span></div>
        <footer>DJR LABS <span>·</span> A tiny place to make something work.</footer>
      </main>
    </>
  );
}
