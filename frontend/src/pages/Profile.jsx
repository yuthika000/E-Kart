import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    city: "",
    pincode: "",
    address: ""
  });

  const [editMode, setEditMode] = useState(false);

  // Fetch profile from DB
  useEffect(() => {
    fetch("http://localhost:8080/api/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      });

      if (!res.ok) throw new Error("Update failed");

      alert("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-wrapper">
      <div className="profile-outer">

        {/* LEFT CARD */}
        <div className="profile-card left-card">
          <div className="user-info">
            <img
              src="https://i.pravatar.cc/100"
              alt="user"
              className="avatar"
            />
            <div>
              <h4>{profile.fullName}</h4>
              <p>{profile.email}</p>
            </div>
          </div>

          <div className="menu">
            <div className="menu-item active">
              <span>👤</span>
              <p>My Profile</p>
            </div>
            <div className="menu-item">
              <span>🚪</span>
              <p>Log Out</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="profile-card right-card">
          <div className="header">
            <div className="user-info">
              <div className="avatar-circle"></div>
              <div>
                <h4>{profile.fullName}</h4>
                <p>{profile.email}</p>
              </div>
            </div>
            <span className="close">✕</span>
          </div>

          <div className="details">

            <div className="row">
              <span>Name</span>
              {editMode ? (
                <input
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                />
              ) : (
                <span className="value">{profile.fullName}</span>
              )}
            </div>

            <div className="row">
              <span>Email</span>
              <span className="value">{profile.email}</span>
            </div>

            <div className="row">
              <span>Mobile</span>
              {editMode ? (
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <span className="value">{profile.phone}</span>
              )}
            </div>

            <div className="row">
              <span>Location</span>
              {editMode ? (
                <input
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                />
              ) : (
                <span className="value">{profile.city}</span>
              )}
            </div>

            <div className="row">
              <span>Gender</span>
              {editMode ? (
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              ) : (
                <span className="value">{profile.gender}</span>
              )}
            </div>

            {editMode ? (
              <button className="save-btn" onClick={handleSave}>
                Save Changes
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setEditMode(true)}>
                EDIT
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
