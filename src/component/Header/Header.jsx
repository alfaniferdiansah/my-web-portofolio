import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isThemeActive, setIsThemeActive] = useState(localStorage.getItem("theme") === "light_theme");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('active');
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('active');
    window.location.reload();
    setIsThemeActive(!isThemeActive);
  };

  useEffect(() => {
    if (isThemeActive) {
      document.body.classList.remove('dark_theme');
      document.body.classList.add('light_theme');
      localStorage.setItem('theme', 'light_theme');
    } else {
      document.body.classList.add('dark_theme');
      document.body.classList.remove('light_theme');
      localStorage.setItem('theme', 'dark_theme');
    }
  }, [isThemeActive]);

  return (
    <>
    <header className={`header ${isHeaderActive ? 'active' : ''}`}>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">
            Ferd<span>.</span>
          </a>
        </h1>

        <div className="navbar-actions">

          <button
            className={`theme-btn ${isThemeActive ? 'active' : ''}`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
          onClick={handleNavToggle}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link navbar-link-bottom">Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link navbar-link-bottom">About</a>
            </li>
            <li>
              <a href="#skills" className="navbar-link navbar-link-bottom">Skills</a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link navbar-link-bottom">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link navbar-link-bottom">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <a href="#top" className={`go-top ${isHeaderActive ? 'active' : ''}`} title="Go to Top">
        <ion-icon name="arrow-up"></ion-icon>
      </a>

    </header>
    </>
  );
};

export default Header;