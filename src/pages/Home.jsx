import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Services from "../components/home/Services.jsx";
import RecentProjects from "../components/home/RecentProjects.jsx";
import CtaSection from "../components/CtaSection.jsx";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lihle Websites — Websites brewed for brands people remember.";

    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      });
      // clear the state so a refresh/back doesn't re-trigger the scroll
      navigate(location.pathname, { replace: true, state: {} });
    } else {
      window.scrollTo({ top: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <RecentProjects />
      <CtaSection />
    </>
  );
}
