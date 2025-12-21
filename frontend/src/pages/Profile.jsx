import React from "react";
import "./Profile.css";

const Profile = () => {
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
              <h4>Your name</h4>
              <p>yourname@gmail.com</p>
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
                <h4>Your name</h4>
                <p>yourname@gmail.com</p>
              </div>
            </div>
            <span className="close">✕</span>
          </div>

          <div className="details">
            <div className="row">
              <span>Name</span>
              <span className="value">your name</span>
            </div>

            <div className="row">
              <span>Email account</span>
              <span className="value">yourname@gmail.com</span>
            </div>

            <div className="row">
              <span>Mobile number</span>
              <span className="value add">Add number</span>
            </div>

            <div className="row">
              <span>Location</span>
              <span className="value">USA</span>
            </div>

            <div className="row">
              <span>Gender</span>
              <span className="value">Female</span>
            </div>

            <div className="row">
              <span>Age</span>
              <span className="value">20</span>
            </div>

            <button className="save-btn">Save Changes</button>
            <button className="edit-btn">EDIT</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
