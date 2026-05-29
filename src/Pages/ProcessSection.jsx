
import '../Style/Process.css';

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Inquiry",
      description:
        "Clients submit product requirements including category, quantity, target price, and specifications.",
      tags: [
        "Apparel Type",
        "Quantity",
        "Design Reference",
        "Timeline",
      ],
    },

    {
      number: "02",
      title: "Product Matching",
      description:
        "Lumera Global identifies suitable factories and sourcing solutions based on client requirements.",
      tags: [
        "Factory Selection",
        "Supplier Comparison",
        "Cost Optimization",
      ],
    },

    {
      number: "03",
      title: "Quotation",
      description:
        "Detailed quotation including pricing, MOQ, lead time, packaging, and shipping details.",
      tags: [
        "MOQ",
        "Unit Price",
        "Lead Time",
        "Shipping Options",
      ],
    },

    {
      number: "04",
      title: "Sampling",
      description:
        "Sample production for quality evaluation before mass manufacturing begins.",
      tags: [
        "Prototype Sample",
        "Material Approval",
        "Fit Testing",
      ],
    },

    {
      number: "05",
      title: "Production",
      description:
        "Bulk manufacturing starts after sample approval and production confirmation.",
      tags: [
        "Production Scheduling",
        "Manufacturing Monitoring",
        "Progress Update",
      ],
    },

    {
      number: "06",
      title: "Quality Control",
      description:
        "Inspection and monitoring to ensure products meet agreed specifications and standards.",
      tags: [
        "Pre-shipment Inspection",
        "Measurement Check",
        "Packaging Inspection",
      ],
    },

    {
      number: "07",
      title: "Shipment",
      description:
        "International logistics coordination and shipment delivery to client destination.",
      tags: [
        "Sea & Air Freight",
        "Export Handling",
        "Door-to-door Delivery",
      ],
    },
  ];

  return (
    <section className="process-section" id='process'>
      <div className="process-glow glow-left"></div>
      <div className="process-glow glow-right"></div>

      <div className="process-container">

        {/* HEADER */}
        <div className="process-header">
          <span className="process-label">
            OUR PROCESS
          </span>

          <h2 className="process-title">
            End-to-End
            <span> Sourcing Process</span>
          </h2>

          <p className="process-description">
            A streamlined process ensuring efficient
            sourcing, production, quality control,
            and global delivery.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div className="timeline-item" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-circle">
                {step.number}
              </div>

              <span>{step.title}</span>

              {index !== processSteps.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
          ))}
        </div>

        {/* PROCESS CARDS */}
        <div className="process-cards">
          {processSteps.map((step, index) => (
            <div className="process-card" key={index}
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <span className="process-number">
                {step.number}
              </span>

              <div className="process-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="process-tags">
                  {step.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
