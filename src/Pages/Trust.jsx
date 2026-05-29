
import '../Style/Trust.css';


import { FaBuildingWheat } from "react-icons/fa6";
import { TbBuildingFactory2 } from "react-icons/tb";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FaGlobeAfrica } from "react-icons/fa";

export default function Trust() {
  const trustItems = [
    {
      icon: <FaBuildingWheat size={28} />,
      title: "Based in Singapore 🇸🇬",
      description:
        "Registered Singapore trading company providing reliable global sourcing and supply chain solutions.",
    },
    {
      icon: <TbBuildingFactory2 size={28} strokeWidth={1.8} />,
      title: "Asia Factory Network",
      description:
        "Direct access to trusted factories across Vietnam, China, Indonesia, and Asia manufacturing hubs.",
    },
    {
      icon: <BiSolidBadgeCheck size={28} strokeWidth={1.8} />,
      title: "20+ Years Garment Experience",
      description:
        "Strong industry experience in apparel sourcing, production coordination, and wholesale supply.",
    },
    {
      icon: <FaGlobeAfrica size={28} strokeWidth={1.8} />,
      title: "Global Logistics Support",
      description:
        "End-to-end coordination from production to international shipment and delivery.",
    },
  ];

  return (
    <section className="trust-section">
      <div className="trust-glow glow-left"></div>
      <div className="trust-glow glow-right"></div>

      <div className="trust-container">
        <div className="trust-header" data-aos='fade-up'>
          <span className="trust-label">
            WHY LUMERA GLOBAL
          </span>

          <h2 className="trust-title">
            Trusted Global Apparel
            <span> Sourcing Partner</span>
          </h2>

          <p className="trust-description">
            Reliable apparel sourcing solutions with trusted
            factory networks across Asia.
          </p>
        </div>

        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div 
              className="trust-card" 
              key={index} 
              data-aos='fade-up' 
              data-aos-delay={index * 150}
            >
              <div className="trust-icon-wrapper">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="trust-bg-text">
          LUMERA APPAREL
        </div>
      </div>
    </section>
  );
}
