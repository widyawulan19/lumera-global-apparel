import '../Style/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-glow glow-1"></div>
      <div className="cta-glow glow-2"></div>

      <div className="cta-container">

        {/* LEFT */}
        <div className="cta-left">

          <span className="cta-label">
            START YOUR SOURCING JOURNEY
          </span>

          <h2 className="cta-title">
            Let's Build
            <span> Your Supply Chain</span>
          </h2>

          <p className="cta-description">
            Partner with Lumera Global to source
            high-quality apparel from trusted factories
            across Asia with scalable production and
            global delivery support.
          </p>

        </div>

        {/* RIGHT */}
        <div className="cta-right">

          <button className="cta-btn primary-btn">
            Request Quote
          </button>

          <button className="cta-btn secondary-btn">
            Contact Us
          </button>

          <button className="cta-btn whatsapp-btn">
            WhatsApp
          </button>

        </div>

      </div>

    </section>
  );
}
