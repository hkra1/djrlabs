import Head from 'next/head';
import styles from '../styles/Home.module.css';

const projects = [
  {
    title: 'Quantum Systems',
    desc: 'Research-driven product concept blending robotics, software, and human-centered design.',
    repo: '#',
    live: '#',
  },
  {
    title: 'Signal Studio',
    desc: 'A design-first platform for prototyping interactive experiences and digital products.',
    repo: '#',
    live: '#',
  },
  {
    title: 'Prototype Lab',
    desc: 'Experimental work spanning software, hardware, interface systems, and product storytelling.',
    repo: '#',
    live: '#',
  },
];

const principles = ['STEM', 'R&D', 'ARTS & DESIGN', 'SOFTWARE', 'HARDWARE'];

export default function Home() {
  return (
    <>
      <Head>
        <title>DJRLABS — Product Engineering Studio</title>
        <meta
          name="description"
          content="DJRLABS is a product engineering studio blending STEM, research, art, design, software, and hardware."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DJRLABS" />
        <meta property="og:description" content="STEM, R&D, ARTS & DESIGN, SOFTWARE & HARDWARE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://djrlabs.fun/" />
        <meta name="theme-color" content="#03060c" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://djrlabs.fun/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:image" content="https://djrlabs.fun/favicon.svg" />
      </Head>

      <div className={styles.backdrop} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbA}`} />
        <div className={`${styles.orb} ${styles.orbB}`} />
        <div className={`${styles.orb} ${styles.orbC}`} />
      </div>

      <main className={styles.pageShell}>
        <header className={styles.header}>
          <a href="/" className={styles.brandWrap}>
            <span className={styles.logo}>DJR</span>
            <span className={styles.brandText}>LABS</span>
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Product engineering studio</p>
            <h1>Build bold ideas into world-class systems.</h1>
            <p className={styles.lead}>
              DJRLABS brings together science, design, engineering, and product thinking to turn
              future-facing concepts into elegant, high-performance experiences.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.primaryButton} href="#projects">
                View work
              </a>
              <a className={styles.secondaryButton} href="#contact">
                Start a conversation
              </a>
            </div>
            <div className={styles.principles} aria-label="Core disciplines">
              {principles.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.showcaseCard} aria-label="Studio summary">
            <div className={styles.showcaseLabel}>Studio focus</div>
            <div className={styles.metrics}>
              <div>
                <strong>01</strong>
                <span>Research</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Prototype</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Launch</span>
              </div>
            </div>
            <div className={styles.quoteBox}>
              <span>Reference vision</span>
              <p>
                “Design for the future, engineer for the present, and ship with conviction.”
              </p>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>About</p>
            <h2>We build at the intersection of technology, creativity, and execution.</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <p>
                DJRLABS is a modern product studio spanning STEM, R&amp;D, arts &amp; design,
                software, and hardware. The operating model is simple: investigate deeply,
                prototype rapidly, and deliver with clarity.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <p>
                Inspired by product-first thinking from leaders across technology and design, the
                studio blends engineering discipline with bold creative ambition.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Selected work</p>
            <h2>High-impact concepts across product, systems, and design.</h2>
          </div>
          <div className={styles.cardGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.productCard}>
                <span className={styles.cardTag}>Case study</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className={styles.cardActions}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live preview →
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    Repository →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Contact</p>
            <h2>Start building the next system that matters.</h2>
          </div>

          <div className={styles.contactWrap}>
            <div className={styles.contactInfo}>
              <p>
                For collaborations, product exploration, and strategic prototypes, reach out.
              </p>
              <a href="mailto:hello@djrlabs.fun">hello@djrlabs.fun</a>
            </div>

            <form
              className={styles.form}
              action="mailto:hello@djrlabs.fun"
              method="post"
              encType="text/plain"
            >
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  maxLength={120}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  maxLength={254}
                />
              </label>
              <label>
                <span>Project brief</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your idea or challenge."
                  required
                  maxLength={4000}
                />
              </label>
              <button type="submit" className={styles.submitButton}>
                Send inquiry
              </button>
            </form>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} DJRLABS</span>
          <span>Product engineering studio</span>
        </footer>
      </main>
    </>
  );
}
