import "./experience.css";

const experiences = [
  {
    date: "04/2023 — 07/2024",
    company: "Freelancer at Mostaqel.com",
    role: "software engineer",
    desc: "Developed scalable web applications , Designed and implemented Web pages , Utilized Git and GitHub for version control and seamless team collaboration , Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget",
  },
  {
    date: "09/2022 — 12/2022",
    company: "ITI (Information Technology Institute)",
    role: "Full Stack Engineer Trainee",
    desc: "Built full-stack web applications using Node.js, React.js, and SQL Server , Implemented dynamic forms, responsive UI components, and CRUD operations to enhance user experienceAssisted in RESTful API development and database integrationCollaborated with team members in Agile workflows, delivering functional and maintainable code",
  },
  {
    date: "04/2022 — 08/2022",
    company: "Sparks Foundation",
    role: "Software Engineer Intern",
    desc: "Developed scalable full-stack web applications using React.js, Node.js, and Express.js , Designed and implemented RESTful APIs for secure and efficient data exchange , Managed and structured data using MongoDB and SQL Server , Utilized Git and GitHub for version control and seamless team collaboration",
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        {/* HEADER */}
        <div className="section-header reveal">
          <div className="section-label">// experience</div>
          <h2 className="section-title">Career Timeline</h2>
          <p className="section-subtitle">
            Where I've been and what I've shipped.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item reveal" key={exp.company}>
              <div className="timeline-dot"></div>

              <div className="timeline-date">{exp.date}</div>

              <div className="timeline-company">{exp.company}</div>

              <div className="timeline-role">{exp.role}</div>

              <p className="timeline-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
