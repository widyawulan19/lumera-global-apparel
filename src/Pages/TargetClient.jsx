import '../Style/TargetClient.css';

export default function TargetClients() {
  const clients = [
    {
      id: "01",
      className: "large-card",
      title: "Retail Brands",
      description:
        "Private label and apparel production solutions for clothing brands and retail businesses seeking scalable manufacturing support.",
      tags: [
        "Fashion Brands",
        "Kidswear",
        "Lifestyle Brands",
        "Boutique Retailers",
      ],
    },

    {
      id: "02",
      className: "small-card",
      title: "Distributors",
      description:
        "Bulk apparel supply solutions for wholesale distributors with competitive pricing and consistent production.",
      tags: [
        "Regional Distributors",
        "Wholesale Supply",
      ],
    },

    {
      id: "03",
      className: "medium-card",
      title: "Importers",
      description:
        "Global apparel sourcing for import businesses with logistics coordination and scalable manufacturing.",
      tags: [
        "Global Buyers",
        "Trading Companies",
        "Overseas Wholesalers",
      ],
    },

    {
      id: "04",
      className: "large-card",
      title: "Corporate Uniform Buyers",
      description:
        "Custom uniform production for organizations, hospitality businesses, healthcare institutions, and industrial sectors.",
      tags: [
        "Corporate Uniform",
        "Hospitality",
        "Industrial Workwear",
        "Healthcare Uniforms",
      ],
    },

    {
      id: "05",
      className: "small-card",
      title: "Government Projects",
      description:
        "Large-scale apparel procurement support for public sector and institutional projects.",
      tags: [
        "Institutional Uniforms",
        "Tender Projects",
      ],
    },

    {
      id: "06",
      className: "medium-card",
      title: "E-commerce Brands",
      description:
        "Flexible apparel production for online brands and modern D2C businesses.",
      tags: [
        "Shopify Brands",
        "Amazon Sellers",
        "D2C Brands",
      ],
    },
  ];

  return (
    <section className="target-section" id='client'>
      <div className="target-glow glow-left"></div>
      <div className="target-glow glow-right"></div>

      <div className="target-container">

        {/* HEADER */}
        <div className="target-header" data-aos="fade-up">
          <span className="target-label">
            OUR TARGET CLIENTS
          </span>

          <h2 className="target-title">
            Who We Work With
          </h2>

          <p className="target-description">
            Lumera Global supports businesses across
            various industries with scalable apparel
            sourcing and manufacturing solutions.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="target-grid">
          {clients.map((client, index) => (
            <div
              className={`target-card ${client.className}`}
              key={index}
               data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <span className="target-number">
                {client.id}
              </span>

              <div 
                className="target-content"
              >
                <h3>{client.title}</h3>

                <p>{client.description}</p>

                <div className="target-tags">
                  {client.tags.map((tag, idx) => (
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
