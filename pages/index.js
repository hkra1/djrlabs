import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
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

const navLinks = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
  { href: 'https://github.com/hkra1', id: 'github', label: 'GitHub', external: true },
];

export default function Home() {
  const router = useRouter();
  const sent = router.query.sent === '1';
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const observerRef = useRef(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setHeroReady(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setScrolled(scrollTop > 24);
      setShowTop(scrollTop > 480);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <div className={styles.backdrop} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbA}`} />
        <div className={`${styles.orb} ${styles.orbB}`} />
        <div className={`${styles.orb} ${styles.orbC}`} />
      </div>

      <main className={styles.pageShell}>
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
          <a href="/" className={styles.brandWrap} onClick={closeMenu}>
            <span className={styles.logo}>DJR</span>
            <span className={styles.brandText}>LABS</span>
          </a>

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                data-active={!link.external && activeSection === link.id ? 'true' : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>

          <div
            id="mobile-nav"
            className={styles.mobileNav}
            data-open={menuOpen ? 'true' : 'false'}
            hidden={!menuOpen}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                data-active={!link.external && activeSection === link.id ? 'true' : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p
              className={`${styles.kicker} ${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay1}`}
            >
              Product engineering studio
            </p>
            <h1
              className={`${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay2}`}
            >
              Build bold ideas into world-class systems.
            </h1>
            <p
              className={`${styles.lead} ${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay3}`}
            >
              DJRLABS brings together science, design, engineering, and product thinking to turn
              future-facing concepts into elegant, high-performance experiences.
            </p>
            <div
              className={`${styles.ctaRow} ${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay4}`}
            >
              <a className={styles.primaryButton} href="#projects">
                View work
              </a>
              <a className={styles.secondaryButton} href="#contact">
                Start a conversation
              </a>
            </div>
            <div
              className={`${styles.principles} ${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay5}`}
              aria-label="Core disciplines"
            >
              {principles.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div
            className={`${styles.showcaseCard} ${styles.reveal} ${heroReady ? styles.revealVisible : ''} ${styles.delay3}`}
            aria-label="Studio summary"
          >
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

        <section id="about" className={styles.section} data-reveal>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <p className={styles.sectionEyebrow}>About</p>
            <h2>We build at the intersection of technology, creativity, and execution.</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutCard} ${styles.reveal} ${styles.delay1}`}>
              <p>
                DJRLABS is a modern product studio spanning STEM, R&amp;D, arts &amp; design,
                software, and hardware. The operating model is simple: investigate deeply,
                prototype rapidly, and deliver with clarity.
              </p>
            </div>
            <div className={`${styles.aboutCard} ${styles.reveal} ${styles.delay2}`}>
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

        <section id="projects" className={styles.section} data-reveal>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <p className={styles.sectionEyebrow}>Selected work</p>
            <h2>High-impact concepts across product, systems, and design.</h2>
          </div>
          <div className={styles.cardGrid}>
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`${styles.productCard} ${styles.reveal} ${styles[`delay${Math.min(i + 1, 5)}`] || ''}`}
              >
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

        <section id="contact" className={styles.section} data-reveal>
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <p className={styles.sectionEyebrow}>Contact</p>
            <h2>Start building the next system that matters.</h2>
          </div>

          <div className={styles.contactWrap}>
            <div className={`${styles.contactInfo} ${styles.reveal} ${styles.delay1}`}>
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
              <div className={`${styles.formSuccess} ${styles.reveal} ${styles.delay2}`} role="status">
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
                className={`${styles.form} ${styles.reveal} ${styles.delay2}`}
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
          <div className={styles.footerBrand}>
            <strong>DJR LABS</strong>
            <p>Product engineering studio spanning STEM, R&amp;D, design, software, and hardware.</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <a href="https://github.com/hkra1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://x.com/mehkra1" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a href="mailto:hello@djrlabs.fun">Email</a>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} DJRLABS. All rights reserved.</span>
            <span>Built for clarity, performance, and craft.</span>
          </div>
        </footer>
      </main>

      <button
        type="button"
        className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
