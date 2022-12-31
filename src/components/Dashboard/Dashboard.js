import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const test = () => {
    axios
      .get(`http://localhost:3001/customer/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log("click");
        console.log("res customer > ", res);
      });
  };
  return (
    <div className="customer-db-cont">
      <div className="customer-db-first">
        <h1 className="db-header">Welcome Customer!</h1>
      </div>
      <div className="customer-db-second">
        <div className="customer-db-second-content-cont">
          <div className="customer-db-second-content-detail">
            <h4>Total menu ordered</h4>
          </div>
          <div className="customer-db-second-content-detail">
            <h4>108</h4>
          </div>
        </div>
        <div className="customer-db-second-content-cont">
          <div className="customer-db-second-content-detail">
            <h4>Total Spent</h4>
          </div>
          <div className="customer-db-second-content-detail">
            <h4>182039 Baht</h4>
          </div>
        </div>
        <div className="customer-db-second-content-cont-pie">FOR PIE CHART</div>
      </div>
      <div className="customer-db-third">
        <div className="customer-db-third-customerorders">
          <div className="customer-db-third-customerorders-label">
            Order's History
          </div>
          <div className="customer-db-third-customerorders-label-menu">
            <div className="customer-db-third-customerorders-label-menu-cont">
              <h3>Dish Image</h3>
            </div>
            <div className="customer-db-third-customerorders-label-menu-cont">
              <h3>Dish Name</h3>
            </div>
            <div className="customer-db-third-customerorders-label-menu-cont">
              <h3>Price</h3>
            </div>
            <div className="customer-db-third-customerorders-label-menu-cont">
              <h3>Quantity</h3>
            </div>
          </div>
          <div className="customer-db-third-customerorders-detail-cont">
            <div className="customer-db-third-customerorders-detail-cont-2">
              <div className="customer-db-third-customerorders-detail">
                <img
                  className="customer-db-menu-img"
                  src="https://i.imgur.com/sCmxZ5S.jpg"
                ></img>
              </div>
              <div className="customer-db-third-customerorders-detail">
                Tom Yum Kung
              </div>
              <div className="customer-db-third-customerorders-detail">
                150 Baht
              </div>
              <div className="customer-db-third-customerorders-detail">x 3</div>
            </div>
            <div className="customer-db-third-customerorders-detail-cont-2">
              <div className="customer-db-third-customerorders-detail">
                <img
                  className="customer-db-menu-img"
                  src="https://i.imgur.com/sCmxZ5S.jpg"
                ></img>
              </div>
              <div className="customer-db-third-customerorders-detail">
                Tom Yum Kung
              </div>
              <div className="customer-db-third-customerorders-detail">
                150 Baht
              </div>
              <div className="customer-db-third-customerorders-detail">x 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
