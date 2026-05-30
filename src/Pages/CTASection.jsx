import '../Style/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-glow glow-1"></div>
      <div className="cta-glow glow-2"></div>

      <div className="cta-container">

        {/* LEFT */}
        <div className="cta-left" data-aos="zoom-in">

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
        <div className="cta-right" data-aos="zoom-in" data-aos-delay="200">

          <a
            href="https://api.whatsapp.com/send?phone=6590846600&text=Hello%20Lumera%20Global%2C%20I%20am%20interested%20in%20sourcing%20apparel%20for%20my%20business%20and%20would%20like%20to%20request%20a%20quotation.%20Could%20you%20please%20provide%20information%20on%20MOQ%2C%20pricing%2C%20production%20timelines%2C%20and%20available%20customization%20options%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="cta-btn primary-btn">
            Request Quote
          </button>
          </a>

          <a
            href="mailto:lumeraglobalsgp@gmail.com?subject=Inquiry%20about%20Apparel%20Sourcing%20Services&body=Hello%20Lumera%20Global,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20apparel%20sourcing%20services.%20Could%20you%20please%20provide%20information%20on%20MOQ,%20pricing,%20production%20timelines,%20and%20customization%20options?%0D%0A%0D%0AThank you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn secondary-btn">
              Mail Us
            </button>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=6590846600&text=Hello%20Lumera%20Global,%20I%20would%20like%20to%20inquire%20about%20your%20apparel%20sourcing%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn whatsapp-btn">
              WhatsApp
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}
