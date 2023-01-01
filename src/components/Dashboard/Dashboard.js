import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = (props) => {
  const [menuItem,setMenuitem]=useState(<option value="loading">Loading</option>)
  const navigate = useNavigate();
  const [select,setSelect]=useState()
  const [list,setList]=useState()
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeSelect = (e) => {
    setSelect(e.target.value)
  };

  const test = () => {
    axios
      .get(`http://localhost:3001/customer/data`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log(res)
      });
  };
  useEffect(() => {
    const select = axios.get('http://localhost:3001/customer/data',{
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    }).then(resu=>{

      console.log(resu)
      let data = resu.data.map((name,index)=>{
        console.log(name)
        return(
            <option value={name.id} key={index}>{name.id}</option>
        )
      })
      setMenuitem(data)
    })

  },[]);

  useEffect(() => {
    if(select!==undefined){
    axios.get(`http://localhost:3001/customer/data/${select}`,{
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    }).then(resu=>{
      console.log(resu)
      let data = resu.data.map((name,index)=>{
        console.log(name)
        return(
            <p>test</p>
        )
      })
      setList(data)
    })}
},[select]);
  return (
    <div className="customer-db-cont">
      <div className="customer-db-buttons">
        <p>LOGOUT</p>
        <p onClick={() => navigate("/profile")}>PROFILE</p>
      </div>
      <div className="customer-db-first">
        <h1 className="db-header" onClick={test}>Welcome Customer!</h1>
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
            {/*//TODO*/}
            <select name="<OrderID>" id="OrderID" onChange={handleChangeSelect}>
              <option value="" selected disabled hidden>Choose here</option>
              {menuItem}
            </select>
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
            {/*//TODO*/}
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
