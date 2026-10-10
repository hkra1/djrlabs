import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const projects = [
  {
    title: 'Agent Taskboard',
    desc: 'Collaborative task board for humans and AI agents using WebMCP. Built for the OpenAI WebMCP Challenge 2026.',
    repo: 'https://github.com/hkra1/webmcp-agent-taskboard',
    live: 'https://github.com/hkra1/webmcp-agent-taskboard',
    tag: 'Open source',
  },
  {
    title: 'Interactive STEM Platform',
    desc: 'Open-source interactive STEM learning platform with simulations, AI tutors, and browser-based interactivity.',
    repo: 'https://github.com/hkra1/interactive-stem-platform',
    live: 'https://github.com/hkra1/interactive-stem-platform',
    tag: 'Education',
  },
  {
    title: 'Security Ops Lab',
    desc: 'Practical notes, automation experiments, and tooling around cloud security, risk analysis, and infrastructure operations.',
    repo: 'https://github.com/hkra1/security-ops-lab',
    live: 'https://github.com/hkra1/security-ops-lab',
    tag: 'Security',
  },
];

const principles = ['STEM', 'R&D', 'ARTS & DESIGN', 'SOFTWARE', 'HARDWARE'];

const social = [
  { label: 'GitHub', href: 'https://github.com/hkra1' },
  { label: 'X / Twitter', href: 'https://x.com/mehkra1' },
  { label: 'Email', href: 'mailto:hello@djrlabs.fun' },
];

export default function Home() {
  const router = useRouter();
  const sent = router.query.sent === '1';

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
            <a href="https://github.com/hkra1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
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
                studio blends engineering discipline with bold creative ambition. Explore open work on{' '}
                <a href="https://github.com/hkra1" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                .
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
                <span className={styles.cardTag}>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className={styles.cardActions}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    View project →
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
                For collaborations, product exploration, and strategic prototypes, reach out. Messages
                from this form are delivered to the studio inbox.
              </p>
              <a href="mailto:hello@djrlabs.fun">hello@djrlabs.fun</a>
              <div className={styles.socialRow}>
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {sent ? (
              <div className={styles.formSuccess} role="status">
                <p className={styles.sectionEyebrow}>Message sent</p>
                <h3>Thanks — your inquiry is in the queue.</h3>
                <p>
                  We will reply to the email you provided. You can also write directly to{' '}
                  <a href="mailto:hello@djrlabs.fun">hello@djrlabs.fun</a>.
                </p>
                <a className={styles.secondaryButton} href="/#contact">
                  Send another message
                </a>
              </div>
            ) : (
              <form
                className={styles.form}
                action="https://formsubmit.co/hkr96@outlook.in"
                method="POST"
              >
                <input type="hidden" name="_subject" value="DJRLABS website inquiry" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://djrlabs.fun/?sent=1#contact" />
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

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
            )}
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} DJRLABS</span>
          <span className={styles.footerLinks}>
            <a href="https://github.com/hkra1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://x.com/mehkra1" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="mailto:hello@djrlabs.fun">Email</a>
          </span>
        </footer>
      </main>
    </>
  );
}
