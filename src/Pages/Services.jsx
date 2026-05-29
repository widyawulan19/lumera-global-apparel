
import '../Style/Services.css';

import {
  Factory,
  Tag,
  SearchCheck,
  PackageCheck,
  BriefcaseBusiness,
  Truck,
} from "lucide-react";

import { TbBuildingFactory2 } from "react-icons/tb";

export default function Services() {
  const services = [
    {
      number: "01",
      icon: <Factory size={26} strokeWidth={1.8} />,
      title: "OEM Manufacturing",
      description:
        "We support brands and businesses with OEM apparel manufacturing, producing garments based on your specifications and production requirements.",
      includes: [
        "Custom design production",
        "Material sourcing",
        "Production scaling",
      ],
    },

    {
      number: "02",
      icon: <Tag size={26} strokeWidth={1.8} />,
      title: "Private Label Production",
      description:
        "Launch your own clothing brand with custom labeling, packaging, and production coordination services.",
      includes: [
        "Custom label & tag",
        "Brand packaging",
        "Retail-ready production",
      ],
    },

    {
      number: "03",
      icon: <SearchCheck size={26} strokeWidth={1.8} />,
      title: "Apparel Sourcing",
      description:
        "We connect buyers with trusted apparel factories across Asia with verified manufacturing capabilities.",
      includes: [
        "Factory matching",
        "Supplier verification",
        "Production monitoring",
      ],
    },

    {
      number: "04",
      icon: <PackageCheck size={26} strokeWidth={1.8} />,
      title: "Bulk Wholesale Supply",
      description:
        "Ready-stock apparel supply solutions for distributors, importers, and retail businesses.",
      includes: [
        "Ready stock sourcing",
        "Bulk pricing",
        "Fast shipment",
      ],
    },

    {
      number: "05",
      icon: <BriefcaseBusiness size={26} strokeWidth={1.8} />,
      title: "Custom Uniform & Corporate Apparel",
      description:
        "Custom uniform manufacturing for corporate, government, hospitality, and organizations.",
      includes: [
        "Corporate uniform",
        "Industrial workwear",
        "Custom embroidery",
      ],
    },

    {
      number: "06",
      icon: <Truck size={26} strokeWidth={1.8} />,
      title: "Logistics Coordination",
      description:
        "End-to-end logistics support from factory pickup to international shipping and delivery.",
      includes: [
        "Sea & air freight",
        "Export coordination",
        "Door-to-door delivery",
      ],
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-glow glow-top"></div>
      <div className="services-glow glow-bottom"></div>

      <div className="services-container">
        
        {/* LEFT SIDE */}
        <div className="services-left" data-aos='zoom-out'>
          <span className="services-label">
            OUR SERVICES
          </span>

          <h2 className="services-title">
            End-to-End Apparel
            <span> Sourcing Solutions</span>
          </h2>

          <p className="services-description">
            Comprehensive sourcing and manufacturing
            services tailored for global apparel brands,
            distributors, and businesses worldwide.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          {services.map((service, index) => (
            <div
              className={`service-card ${
                index % 2 === 1 ? "offset-card" : ""
              }`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-divider"></div>

              <ul>
                {service.includes.map((item, idx) => (
                  <li key={idx}>↳ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
