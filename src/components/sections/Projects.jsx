import "./projects.css";

const projects = [
  {
    icon: "🌌",
    year: "2026",
    type: "SaaS Platform",
    title: "Data Processing & Analytics Dashboard - fullStack implementation",
    desc: "Full-stack SaaS platform for real-time  business analytics. Handles analytics dashboard that processes CSV data and generates business insights. processing millions of records daily.",
    stack: [
      "Node.js v22",
      "React",
      "PostgreSQL",
      "vite",
      "Prisma",
      "Tailwind CSS",
      "Chart.js",
    ],
    links: [
      { label: "Live Demo ↗", url: "#" },
      {
        label: "GitHub ↗",
        url: "https://github.com/AbdelrahmanOmar1/Data-Process-Analytics-FullStack",
      },
    ],
  },
  {
    icon: "🛒",
    year: "2026",
    type: "Appointment Booking System",
    title: "GovTime – Smart Government Appointment & Scheduling System",
    desc: "GovTime is a full-stack web application designed to simplify and digitalize government appointments.Users can create accounts, book appointments, view profiles, and manage notifications.Admins can monitor the system and manage requests. The platform focuses on speed, automation, and security.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "postgreSQL",
      "Tailwind CSS",
      "Prisma",
      "vite",
      "JWT",
      "bcrypt",
      "nodemailer",
    ],
    links: [
      { label: "Live Demo ↗", url: "#" },
      {
        label: "GitHub ↗",
        url: "https://github.com/AbdelrahmanOmar1/GovTime",
      },
    ],
  },
  {
    icon: "💬",
    year: "2025",
    type: "Enterprise-grade e-commerce",
    title: "Findly",
    desc: "Enterprise-grade e-commerce price comparison platform with complete cloud-native DevOps implementation Findly is a production-ready, scalable price comparison service that demonstrates modern software engineering practices from development to deployment. This project showcases a complete DevOps pipeline with multi-cloud infrastructure, container orchestration, and automated CI/CD workflows.",
    stack: [
      "React",
      "Redis",
      "Express",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Azure",
    ],
    links: [
      { label: "Live Demo ↗", url: "#" },
      { label: "GitHub ↗", url: "https://github.com/AbdelrahmanOmar1/Findly" },
    ],
  },
  {
    icon: "🌻",
    year: "2024",
    type: " AI Solution",
    title: "Agri-Tech360",
    desc: "AI-powered agricultural solution for crop monitoring and yield prediction , React App to Detect leaf plant diseases and suggest next crop provided also with chatbot.",
    stack: ["React", "Python", "Django", "MongoDB", "TensorFlow", "OpenCV"],
    links: [
      { label: "Live Demo ↗", url: "https://agri-tech360.netlify.app/" },
      {
        label: "GitHub ↗",
        url: "https://github.com/AbdelrahmanOmar1/Agri-tech360",
      },
    ],
  },
  {
    icon: "⚕️",
    year: "2024",
    type: "portfolio project",
    title: "Insurance-Be-Smile",
    desc: "This project is an web application focused on selling Insurance . It's built using HTML, SCSS (Sass), JavaScript, Jquery and any other relevant technologies used. The platform allows users to browse a collection of Insurance Systems.",
    stack: ["HTML", "SCSS", "JavaScript"],
    links: [
      { label: "Live Demo ↗", url: "https://be-smile-web.netlify.app/" },
      {
        label: "GitHub ↗",
        url: "https://github.com/AbdelrahmanOmar1/Insurance-Be-Smile",
      },
    ],
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        {/* HEADER */}
        <div className="section-header reveal">
          <div className="section-label">// featured work</div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Handpicked work that demonstrates my range and depth.
          </p>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card reveal" key={project.title}>
              {/* THUMB */}
              <div className="project-thumb">
                <div className="project-icon">{project.icon}</div>
                <div className="project-thumb-overlay" />
              </div>

              {/* BODY */}
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <div className="project-title">{project.title}</div>

                <p className="project-desc">{project.desc}</p>

                {/* STACK */}
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="project-tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="project-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
