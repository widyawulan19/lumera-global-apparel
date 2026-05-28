import '../Style/GlobalCoverage.css';

export default function GlobalCoverageSection() {

  const locations = [
    "Singapore HQ",
    "Indonesia",
    "Vietnam",
    "China",
    "Bangladesh",
  ];

  return (
    <section className="coverage-section">

      <div className="coverage-glow glow-left"></div>
      <div className="coverage-glow glow-right"></div>

      <div className="coverage-container">

        {/* LEFT SIDE */}
        <div className="coverage-left">

          <span className="coverage-label">
            GLOBAL COVERAGE
          </span>

          <h2 className="coverage-title">
            Global Sourcing
            <span> Network</span>
          </h2>

          <p className="coverage-description">
            Lumera Global operates through a
            strategic sourcing network across key
            apparel manufacturing hubs in Asia.
          </p>

          <div className="coverage-locations">
            {locations.map((location, index) => (
              <div
                className={`location-item ${
                  index === 0 ? "hq-location" : ""
                }`}
                key={index}
              >
                <span className="location-dot"></span>
                {location}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="coverage-right">

          <div className="map-wrapper">

            <div className="map-glow"></div>

            {/* MAP DOTS */}
            <div className="map-dot singapore">
              <span>Singapore HQ</span>
            </div>

            <div className="map-dot indonesia">
              <span>Indonesia</span>
            </div>

            <div className="map-dot vietnam">
              <span>Vietnam</span>
            </div>

            <div className="map-dot china">
              <span>China</span>
            </div>

            <div className="map-dot bangladesh">
              <span>Bangladesh</span>
            </div>

            {/* CONNECTION LINES */}
            <div className="map-line line-1"></div>
            <div className="map-line line-2"></div>
            <div className="map-line line-3"></div>
            <div className="map-line line-4"></div>

          </div>

        </div>

      </div>

    </section>
  );
}
