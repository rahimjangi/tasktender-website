// CitiesSection.tsx
import React from "react";
import "./CitiesSection.css"; // Make sure to create a corresponding CSS file

const CitiesSection = () => {
  return (
    <div className="cities-section">
      <h2>Cities near me</h2>
      <div className="map-container">
        {/* If using a static image for the map */}
        <img src="path-to-your-map-image.jpg" alt="Map" />
        {/* If using Google Maps or similar, you would include it here */}
      </div>
      <a href="link-to-cities-page" className="view-all-cities-btn">
        View all 500+ cities
      </a>
    </div>
  );
};

export default CitiesSection;
