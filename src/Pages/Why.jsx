// WhyChooseSection.jsx

import "../Style/Why.css";

import {
  Building2,
  Network,
  BadgeDollarSign,
  Scaling,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export default function Why() {
  const features = [
    {
      icon: <Building2 size={24} strokeWidth={1.8} />,
      title: "Singapore-Based Trading Hub",
      description:
        "Operating from Singapore, Lumera Global provides a trusted international trading structure with strong credibility for global buyers and partners.",
    },

    {
      icon: <Network size={24} strokeWidth={1.8} />,
      title: "Direct Factory Network",
      description:
        "Access to verified manufacturing partners across Asia, enabling competitive pricing and flexible production capabilities.",
    },

    {
      icon: <BadgeDollarSign size={24} strokeWidth={1.8} />,
      title: "Competitive Pricing",
      description:
        "Optimized sourcing strategy and direct factory connections help deliver cost-efficient production without compromising quality.",
    },

    {
      icon: <Scaling size={24} strokeWidth={1.8} />,
      title: "Scalable Production",
      description:
        "From small batch orders to large-scale production, Lumera Global supports flexible manufacturing capacity.",
    },

    {
      icon: <ShieldCheck size={24} strokeWidth={1.8} />,
      title: "Quality Control",
      description:
        "Production monitoring and quality assurance processes ensure consistent product standards and reliable output.",
    },

    {
      icon: <Globe2 size={24} strokeWidth={1.8} />,
      title: "End-to-End Supply Chain",
      description:
        "Comprehensive support from sourcing, production, quality control, to global shipping coordination.",
    },
  ];

  return (
    <section className="why-section" id='why'>
      <div className="why-glow glow-left"></div>
      <div className="why-glow glow-right"></div>

      <div className="why-container">
        {/* LEFT SIDE */}
        <div className="why-left" data-aos="fade-up">
          <span className="why-label">
            WHY LUMERA GLOBAL
          </span>

          <h2 className="why-title">
            Why Companies
            <span> Choose Lumera Global</span>
          </h2>

          <p className="why-description">
            A reliable sourcing and trading partner
            connecting Asia factories with global buyers
            through trusted manufacturing networks and
            scalable supply chain solutions.
          </p>

          <div className="why-stats">
            <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Asia</h3>
              <p>Factory Network</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-right">
          <div className="why-line"></div>

          {features.map((item, index) => (
            <div className="why-feature" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="why-icon">
                {item.icon}
              </div>

              <div className="why-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
