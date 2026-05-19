import "./skills.css";

const skills = [
  {
    icon: "📱",
    name: "Programming Languages:",
    tags: ["JavaScript", "TypeScript", "Python", "C#", "Java", "C++"],
  },
  {
    icon: "⚛️",
    name: "Frontend",
    tags: ["React", "Next.js", "HTML5", "CSS3", "Tailwind"],
  },
  {
    icon: "🔧",
    name: "Backend",
    tags: [
      "Node.js",
      " Express.js",
      "RESTful APIs",
      "REST",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    icon: "🗄️",
    name: "Databases",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "PostgreSQL"],
  },
  {
    icon: "🤖",
    name: "Other Tools",
    tags: ["Git", "GitHub", "State Management,", "Vite", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        {/* HEADER */}
        <div className="section-header reveal skills-header">
          <div className="section-label">// skills & expertise</div>
          <h2 className="section-title">Tools of the Trade</h2>
          <p className="section-subtitle">
            Technologies I use to bring ideas to life, from pixels to
            production.
          </p>
        </div>

        {/* GRID */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card reveal" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>

              {/* TAGS */}
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
