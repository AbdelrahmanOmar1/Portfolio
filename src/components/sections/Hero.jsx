import "./hero.css";

const stats = [
  { num: "1+", label: "Years Exp." },
  { num: "10+", label: "Projects" },
  { num: "12+", label: "Clients" },
];

const tags = [
  { name: "React.js", dot: "dot-green", className: "ft1" },
  { name: "Node.js", dot: "dot-cyan", className: "ft2" },
  { name: "PostgreSQL", dot: "dot-purple", className: "ft3" },
  { name: "Express.js", dot: "dot-pink", className: "ft4" },
];

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">
          {/* TEXT CONTENT */}
          <div className="hero-content">
            <div className="hero-tag">✦ Available for opportunities</div>

            <h1 className="hero-name">
              Abdelrahman <br />
              <span>Youssef</span>
            </h1>

            <p className="hero-role">Full Stack Developer & Web Developer</p>

            <p className="hero-desc">
              Crafting performant, scalable web applications from backend APIs
              to pixel-perfect interfaces. Turning complex problems into elegant
              digital solutions.
            </p>

            {/* BUTTONS */}
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                View Projects ↗
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch →
              </a>
            </div>

            {/* STATS */}
            <div className="hero-stats">
              {stats.map((item) => (
                <div className="hero-stat" key={item.label}>
                  <div className="hero-stat-num">{item.num}</div>
                  <div className="hero-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL SECTION */}
          <div className="hero-visual">
            <div className="hero-orb" aria-hidden="true">
              <div className="orb-rings" />
              <div className="orb-rings" />
              <div className="orb-rings" />
              <div className="orb-inner">🌌</div>
            </div>

            {tags.map((tag) => (
              <div className={`floating-tag ${tag.className}`} key={tag.name}>
                <span className={`ft-dot ${tag.dot}`} />
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
