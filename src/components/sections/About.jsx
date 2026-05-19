import "./about.css";

function About() {
  const info = [
    { icon: "📍", text: "Remote / Worldwide" },
    { icon: "🎓", text: "Artificial Intelligence Graduate (2024)" },
    { icon: "⚡", text: "Open Source Contributor" },
    { icon: "🌐", text: "EN · AR" },
    { icon: "🎖️", text: "Military service: Completed" },
    { icon: "🛖", text: "location : Alexandria, Egypt" },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* IMAGE SIDE */}
          <div className="about-img-wrap reveal">
            <div className="about-img">🧑‍💻</div>
          </div>

          {/* TEXT SIDE */}
          <div className="about-content reveal">
            <div className="section-label">// about me</div>

            <h2 className="section-title">
              Building the web,
              <br />
              one commit at a time
            </h2>

            <div className="divider"></div>

            <p className="about-text">
              I'm a full-stack developer with over 1 year of experience building
              modern scalable APIs & web applications. I specialize in crafting
              seamless user experiences backed by robust, scalable
              architectures.
            </p>

            <p className="about-text">
              From designing intuitive UIs with React to building backend
              systems with Node — I enjoy owning the full product lifecycle.
              Clean code, performance, and real-world impact drive my work.
            </p>

            {/* INFO GRID */}
            <div className="about-info-grid">
              {info.map((item, i) => (
                <div className="about-info-item" key={i}>
                  <span className="about-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
