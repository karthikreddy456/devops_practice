// HomePage.js
import React, { useState, useEffect } from "react";
import "../index.css";
function HomePage() {
  return (
    <div className="home-page">
      <div className="item-container">
        {/* Card 1 */}
        <div className="item-card">
          <h2>
            <strong>NodeInfo</strong>
          </h2>
          <p>
            <strong>Master Ip :</strong> 192.168.34.244
          </p>
          <p>
            <strong>Node1 :</strong> 192.168.34.236
          </p>
          <p>
            <strong>Node2 :</strong> 192.168.34.240
          </p>
          <p>
            <strong>common user :</strong> osiuser
          </p>
        </div>

        {/* Card 2 */}
        <div className="item-card">
          <h2>
            <strong>k8 cluster</strong>
          </h2>
        </div>

        {/* Card 3 */}
        <div className="item-card">
          <h2>
            <strong>Jenkins-Deploy Automation</strong>
          </h2>

          <p>
            <strong>onescan-poc:</strong> 192.168.34.244:8081
          </p>
        </div>

        {/* Card 4 */}
        <div className="item-card">
          <h2>
            <strong>Jenkins-Dell Boomi</strong>
          </h2>

          <p>
            <strong>IP :</strong> 192.168.34.240:8080
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
