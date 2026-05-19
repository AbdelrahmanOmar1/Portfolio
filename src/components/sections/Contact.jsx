import "./contact.css";

const contacts = [
  {
    icon: "✉️",
    text: "abdelrahman.y.omar@gmail.com",
    label: "Email",
    href: "mailto:abdelrahman.y.omar@gmail.com",
    style: {},
  },
  {
    icon: "🐙",
    text: "github.com/abdelrahmanOmar1",
    label: "GitHub",
    href: "https://github.com/AbdelrahmanOmar1",
    style: {
      background: "linear-gradient(135deg, #333, #555)",
    },
  },
  {
    icon: "💼",
    text: "linkedin.com/in/adbelrahman-omar",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelrahman-youssef-omar",
    style: {
      background: "linear-gradient(135deg, #0077b5, #00a0dc)",
    },
  },
];

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀 (hook your backend here)");
  };

  return (
    <section id="contact">
      <div className="container">
        {/* HEADER */}
        <div className="section-header reveal" style={{ textAlign: "center" }}>
          <div className="section-label">// contact</div>
          <h2 className="section-title">Let's Build Something</h2>
        </div>

        <div className="contact-wrap reveal">
          <div className="contact-grid">
            {/* LEFT SIDE */}
            <div className="contact-info">
              <p className="contact-text">
                Have a project in mind? Looking for a senior developer to join
                your team? Or just want to chat about tech — I'm always open to
                interesting conversations.
              </p>

              <div className="contact-links">
                {contacts.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="contact-link-item"
                  >
                    <div className="contact-link-icon" style={item.style}>
                      {item.icon}
                    </div>

                    <div>
                      <div className="contact-link-text">{item.text}</div>
                      <div className="contact-link-label">{item.label}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FORM */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button className="form-btn" type="submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
