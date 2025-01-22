import './App.css'

const App = () => {
  const links = [
    { id: 1, text: "Portofolio", url: "https://my-portofolio-new.vercel.app/" },
    { id: 2, text: "Linkedin", url: "https://www.linkedin.com/in/darrylsantoso/" },
    { id: 3, text: "CV", url: "/CV.pdf" },
    { id: 4, text: "Github", url: "https://github.com/darryl-santoso" },
  ];

  return (
    <div className="main-container">
      <div className="linktree-container">
        <header className="profile">
          <img
            src="/images/fotoProfile.png"
            alt="Profile"
            className="profile-image"
          />
          <h2 className="username">Darryl Santoso</h2>
        </header>
        <section className="links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
