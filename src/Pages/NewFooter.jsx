
import '../Style/NewFooter.css';

export default function NewFooter() {
  return (
    <footer className="footer-section" id='footer'>

      <div className="footer-glow glow-left"></div>
      <div className="footer-glow glow-right"></div>

      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-column company-column">

          <h3 className="footer-logo">
            Lumera Global Pte. Ltd.
          </h3>

          <p className="footer-company-text">
            Global Apparel Sourcing & Trading Hub
          </p>

          <div className="footer-address">
            <p>68 Circular Road #02-001</p>
            <p>Singapore 049422</p>
            <p>Singapore Registered Company</p>
          </div>

        </div>

        {/* COLUMN 2 */}
        <div className="footer-column">

          <h4>Services</h4>

          <ul>
            <li>OEM Manufacturing</li>
            <li>Private Label Production</li>
            <li>Apparel Sourcing</li>
            <li>Bulk Wholesale Supply</li>
            <li>Corporate Uniform</li>
            <li>Logistics Coordination</li>
          </ul>

        </div>

        {/* COLUMN 3 */}
        <div className="footer-column">

          <h4>Company</h4>

          <ul>
            <li>About Lumera</li>
            <li>Services</li>
            <li>Global Network</li>
            <li>Contact Us</li>
            <li>Request Quote</li>
          </ul>

        </div>

        {/* COLUMN 4 */}
        <div className="footer-column">

          <h4>Contact</h4>

          <div className="footer-contact">

            <div className="contact-item">
              <span>Email</span>
              <p>hello@lumeraglobal.com</p>
            </div>

            <div className="contact-item">
              <span>WhatsApp</span>
              <p>+62 xxx xxx xxx</p>
            </div>

            <div className="contact-item">
              <span>Business Hours</span>
              <p>Monday – Friday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Lumera Global Pte. Ltd.
            All rights reserved.
          </p>

          <span>
            Singapore Registered Company
          </span>

        </div>

      </div>

    </footer>
  );
}
