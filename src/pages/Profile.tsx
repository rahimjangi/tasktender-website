import React, { useState } from "react";
import "./Profile.css"; // Make sure to create a corresponding CSS file

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsCompleted, setTabsCompleted] = useState([
    true,
    false,
    false,
    false,
  ]); // Assuming four sections
  // Function to go to the next tab
  const goToNextTab = () => {
    if (activeTab < tabsCompleted.length - 1) {
      setActiveTab(activeTab + 1);
      setTabsCompleted(
        tabsCompleted.map((completed, index) =>
          index <= activeTab + 1 ? true : completed
        )
      );
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");

  const [occupation, setOccupation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      {activeTab === 0 && (
        <section className="profile-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Post Code:</label>
            <input
              type="text"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              // Validate and save data
              goToNextTab();
            }}
          >
            Save and Next
          </button>
        </section>
      )}

      {activeTab === 1 && tabsCompleted[1] && (
        <section className="profile-section">
          <h2>Professional Information</h2>
          <div className="form-group">
            <label>Occupation:</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Professional Experience:</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Skills:</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <button onClick={() => goToNextTab()}>Save and Next</button>
        </section>
      )}

      {/* Repeat for other sections */}

      {/* Navigation buttons (optional) */}
      {activeTab > 0 && (
        <button onClick={() => setActiveTab(activeTab - 1)}>Previous</button>
      )}
      {activeTab < tabsCompleted.length - 1 && tabsCompleted[activeTab + 1] && (
        <button onClick={goToNextTab}>Next</button>
      )}
    </div>
  );
};

export default Profile;
