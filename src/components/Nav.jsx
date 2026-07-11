import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const goToServices = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "services" } });
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "Home", active: location.pathname === "/", action: () => navigate("/") },
    { id: "services", label: "Services", active: false, action: goToServices },
    {
      id: "portfolio",
      label: "Portfolio",
      active: location.pathname === "/portfolio",
      action: () => navigate("/portfolio"),
    },
    {
      id: "contact",
      label: "Contact",
      active: location.pathname === "/contact",
      action: () => navigate("/contact"),
    },
  ];

  return (
    <header className={`topbar ${solid ? "solid" : ""}`}>
      <div className="container topbar-inner">
        <a
          className="logo-link"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <img className="logo-img" src={logo} alt="Lihle Websites logo" />
        </a>

        <div className="nav-right">
          <nav className="pill-nav" aria-label="Primary">
            {links.map((l) => (
              <button key={l.id} className={l.active ? "active" : ""} onClick={l.action}>
                {l.label}
              </button>
            ))}
            <button className="pill-nav-cta" onClick={() => navigate("/book-a-project")}>
              Book a Project
            </button>
          </nav>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          <button
            onClick={() => setOpen(false)}
            style={{ position: "absolute", top: 26, right: 26, fontSize: 26 }}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {links.map((l) => (
            <button key={l.id} onClick={l.action}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-gold" onClick={() => navigate("/book-a-project")}>
            Book a Project
          </button>
        </div>
      )}
    </header>
  );
}
