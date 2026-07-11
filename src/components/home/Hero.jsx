import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero" id="top">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
        <div>
          <span className="hero-tag eyebrow">
            <i className="fa-solid fa-mug-hot"></i> Custom sites, brewed to order
          </span>
          <h1>
            Websites brewed for brands <span>people remember.</span>
          </h1>
          <p className="lede">
            I design and build fast, custom websites for small businesses tired of looking like
            everyone else on the block. No templates, no jargon — just a site that feels like yours.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => navigate("/book-a-project")}>
              <i className="fa-solid fa-bolt"></i> Start a Website
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/portfolio")}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i> See My Work
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <strong>5+</strong>
              <span>Projects Shipped</span>
            </div>
            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>98.5%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="editor-wrap">
          <div className="editor-card">
            <div className="editor-topbar">
              <span className="editor-dot" style={{ background: "#ff5f57" }}></span>
              <span className="editor-dot" style={{ background: "#febc2e" }}></span>
              <span className="editor-dot" style={{ background: "#28c840" }}></span>
              <div className="editor-url">
                <i className="fa-solid fa-lock" style={{ fontSize: 9 }}></i> lihlewebsites.co.za/build
              </div>
            </div>
            <div className="editor-body">
              <div className="editor-line">
                <span className="tok-comment">{"// your-brand.jsx"}</span>
              </div>
              <div className="editor-line">
                <span className="tok-tag">{"function"}</span> <span className="tok-plain">{"YourBrand"}</span>
                <span className="tok-punc">{"() {"}</span>
              </div>
              <div className="editor-line">
                {"  "}
                <span className="tok-tag">{"return"}</span> <span className="tok-punc">{"("}</span>
              </div>
              <div className="editor-line">
                {"    "}
                <span className="tok-punc">{"<"}</span>
                <span className="tok-tag">{"Site"}</span>
              </div>
              <div className="editor-line">
                {"      "}
                <span className="tok-attr">{"template"}</span>
                <span className="tok-punc">{"="}</span>
                <span className="tok-str">{'"none"'}</span>
              </div>
              <div className="editor-line">
                {"      "}
                <span className="tok-attr">{"vibe"}</span>
                <span className="tok-punc">{"="}</span>
                <span className="tok-str">{'"unmistakably-you"'}</span>
              </div>
              <div className="editor-line">
                {"      "}
                <span className="tok-attr">{"speed"}</span>
                <span className="tok-punc">{"="}</span>
                <span className="tok-str">{'"fast"'}</span>
              </div>
              <div className="editor-line">
                {"    "}
                <span className="tok-punc">{"/>"}</span>
              </div>
              <div className="editor-line">
                {"  "}
                <span className="tok-punc">{");"}</span>
              </div>
              <div className="editor-line">
                <span className="tok-punc">{"}"}</span>
              </div>
            </div>
            <div className="editor-actions">
              <button className="btn btn-gold btn-sm" onClick={() => navigate("/book-a-project")}>
                <i className="fa-solid fa-play"></i> Start a Website
              </button>
              <button className="btn btn-outline btn-sm" onClick={() => navigate("/portfolio")}>
                See My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
