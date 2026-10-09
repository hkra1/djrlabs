import Head from 'next/head';
import styles from '../styles/Home.module.css';

const projects = [
  {
    title: 'Project Alpha',
    desc: 'A short description of Project Alpha — a placeholder project to showcase layout and links.',
    repo: '#',
    live: '#',
  },
  {
    title: 'Project Beta',
    desc: 'A short description of Project Beta — use this to highlight your work.',
    repo: '#',
    live: '#',
  },
  {
    title: 'Project Gamma',
    desc: 'A short description of Project Gamma — replace with real content.',
    repo: '#',
    live: '#',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>DJRLABS — Portfolio</title>
        <meta name="description" content="DJRLABS — STEM, R&D, ARTS & DESIGN, SOFTWARE & HARDWARE." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="DJRLABS" />
        <meta property="og:description" content="STEM, R&D, ARTS & DESIGN, SOFTWARE & HARDWARE." />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brand}>DJRLABS.</div>
          <nav className={styles.nav}>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <h1>DJRLABS.</h1>
          <p className={styles.tagline}>STEM, R&D, ARTS & DESIGN, SOFTWARE & HARDWARE.</p>
          <p className={styles.lead}>Experiment. Prototype. Ship. A compact portfolio and playground for creative work inspired by the bold thinking of industry leaders.</p>
          <div className={styles.ctaRow}>
            <a className={styles.cta} href="#projects">View projects</a>
            <a className={styles.ctaGhost} href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.grid}>
            {projects.map((p) => (
              <article key={p.title} className={styles.card}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className={styles.cardLinks}>
                  <a href={p.live} target="_blank" rel="noreferrer">Live</a>
                  <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className={styles.section}>
          <h2>About</h2>
          <p>Reference influences: Elon Musk · Jeff Bezos · Steve Jobs · Jensen Huang</p>
          <p>DJRLABS explores intersections of hardware and software, creative research, and product design. This site is a lightweight portfolio and playground — replace the placeholder content with your projects and notes.</p>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>If you’d like to get in touch, use the form below or email <a href="mailto:hello@djrlabs.fun">hello@djrlabs.fun</a>.</p>

          <form className={styles.form} action="https://formspree.io/f/your-form-id" method="POST">
            <label>
              <span>Name</span>
              <input type="text" name="name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={4} required />
            </label>
            <button type="submit" className={styles.submit}>Send</button>
          </form>

          <div className={styles.social}>
            <a href="https://github.com/hkra1" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </section>

        <footer className={styles.footer}>
          <small>© {new Date().getFullYear()} DJRLABS. Built with Next.js · Hosted on GitHub Pages.</small>
        </footer>
      </main>
    </>
  );
}
