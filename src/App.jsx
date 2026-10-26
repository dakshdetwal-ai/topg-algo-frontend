
import {
  ArrowUpRight,
  ArrowRight,
  Activity,
  ShieldCheck,
  Zap,
  Menu
} from "lucide-react";
import "./style.css";

const features = [
  {
    number: "01",
    title: "Rule-based execution",
    description:
      "A systematic trading process built around predefined rules."
  },
  {
    number: "02",
    title: "Risk-aware controls",
    description:
      "Configure trading parameters within defined risk limits."
  },
  {
    number: "03",
    title: "Performance transparency",
    description:
      "Review historical results with clear metrics and methodology."
  }
];

function App() {
  return (
    <>
      <header className="navbar">
        <a className="brand" href="#">
          TOPG<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#technology">Technology</a>
          <a href="#performance">Performance</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="/login">Log in</a>
          <a className="button button-small" href="/signup">
            Get started <ArrowUpRight size={15} />
          </a>
        </div>

        <button className="mobile-menu" aria-label="Menu">
          <Menu size={22} />
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" />
              SYSTEMATIC TRADING TECHNOLOGY
            </div>

            <h1>
              Automated Trading.
              <br />
              <span>Built on Rules.</span>
            </h1>

            <p className="hero-description">
              A structured approach to trading automation.
              Defined rules, measured risk, and execution
              without unnecessary complexity.
            </p>

            <div className="hero-actions">
              <a className="button" href="#pricing">
                View plans <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#technology">
                Explore the system <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={16} />
              <span>No guaranteed returns. Transparent by design.</span>
            </div>
          </div>

          <div className="visual">
            <div className="visual-top">
              <span>TOPG / SYSTEM OVERVIEW</span>
              <span className="visual-status">
                <span className="live-dot" /> INTERFACE PREVIEW
              </span>
            </div>

            <div className="chart-card">
              <div className="chart-heading">
                <div>
                  <p className="muted-label">INSTRUMENT</p>
                  <h3>XAUUSD <span className="muted-inline">/ GOLD</span></h3>
                </div>
                <Activity size={20} color="#C8FF5E" />
              </div>

              <div className="chart">
                <div className="chart-grid" />
                <svg
                  viewBox="0 0 440 170"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Illustrative gold price chart"
                >
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C8FF5E" stopOpacity=".2" />
                      <stop offset="100%" stopColor="#C8FF5E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 130 L28 112 L50 120 L75 83 L98 100 L120 65 L145 79 L171 50 L195 72 L221 42 L245 57 L270 25 L292 46 L320 34 L345 56 L367 28 L390 38 L415 12 L440 18 L440 170 L0 170 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 130 L28 112 L50 120 L75 83 L98 100 L120 65 L145 79 L171 50 L195 72 L221 42 L245 57 L270 25 L292 46 L320 34 L345 56 L367 28 L390 38 L415 12 L440 18"
                    fill="none"
                    stroke="#C8FF5E"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <span className="chart-tag">ILLUSTRATIVE DATA</span>
              </div>

              <div className="chart-footer">
                <div><span>Execution</span><strong>Rule-based</strong></div>
                <div><span>Risk controls</span><strong>Configurable</strong></div>
                <div><span>Results</span><strong>Verification pending</strong></div>
              </div>
            </div>

            <div className="visual-bottom">
              <span>DESIGNED FOR DISCIPLINE</span>
              <span>01 — 03</span>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>BUILT AROUND</span>
          <span>DEFINED RULES</span>
          <span>RISK CONTROLS</span>
          <span>TRANSPARENT RESULTS</span>
        </section>

        <section className="section" id="technology">
          <div className="section-heading">
            <p className="eyebrow">THE APPROACH / 01</p>
            <h2>Less noise.<br />More process.</h2>
          </div>

          <div className="feature-list">
            {features.map((feature) => (
              <article className="feature" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <ArrowUpRight size={19} />
              </article>
            ))}
          </div>
        </section>

        <section className="performance-section" id="performance">
          <p className="eyebrow">PERFORMANCE / 02</p>
          <h2>Evidence over promises.</h2>
          <p>
            Performance data will be published only when it can
            be supported by verifiable records and a clear methodology.
          </p>
          <div className="verification">
            <Activity size={20} />
            <div>
              <strong>Historical results</strong>
              <span>Awaiting verified data before publication</span>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <p className="eyebrow">ACCESS / 03</p>
          <h2>Choose your plan.</h2>
          <p className="pricing-intro">
            Start with seven days of trial access. No payment details required.
          </p>

          <div className="pricing-grid">
            <article className="plan-card">
              <span className="plan-label">01 / ESSENTIAL</span>
              <h3>Basic</h3>
              <p>Essential access to the TopG Algo system.</p>
              <div className="price">Coming soon</div>
              <a className="button button-outline" href="/signup">
                Explore Basic <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="plan-card plan-featured">
              <span className="plan-label">02 / EXTENDED</span>
              <h3>Premium</h3>
              <p>Expanded limits for users who need more flexibility.</p>
              <div className="price">Coming soon</div>
              <a className="button" href="/signup">
                Explore Premium <ArrowUpRight size={16} />
              </a>
            </article>
          </div>
          <p className="fine-print">
            Final pricing and plan limits will be announced before launch.
            Trading involves risk; losses are possible.
          </p>
        </section>

        <section className="closing">
          <div>
            <p className="eyebrow">THE NEXT STEP</p>
            <h2>Make your process systematic.</h2>
          </div>
          <a className="button" href="/signup">
            Get started <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand" href="#">TOPG<span>.</span></a>
          <p>Automated Trading. Built on Rules.</p>
        </div>
        <div className="footer-links">
          <a href="/support">Support</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} TOPG ALGO</span>
      </footer>
    </>
  );
}

export default App;
