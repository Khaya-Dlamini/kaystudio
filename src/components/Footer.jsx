import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToServices = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "services" } });
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="logo-img" src={logo} alt="Lihle Websites logo" />
            <p>
              Custom-built websites for small brands who'd rather stand out than blend in. Based in
              Johannesburg, working with clients everywhere.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Site</h4>
              <button onClick={() => navigate("/")}>Home</button>
              <button onClick={goToServices}>Services</button>
              <button onClick={() => navigate("/portfolio")}>Portfolio</button>
              <button onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <div className="footer-col">
              <h4>Get in touch</h4>
              <a href="mailto:hello@lihlewebsites.co.za">hello@lihlewebsites.co.za</a>
              <a href="tel:+27000000000">+27 00 000 0000</a>
              <button onClick={() => navigate("/book-a-project")}>Book a Project</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lihle Websites. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
