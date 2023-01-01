import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
const Dashboard = (props) => {
  const [data,setData]=useState([
      {
    type: 'Test',
    value: 27,
  }])
  const [menuItem,setMenuitem]=useState(<option value="loading">Loading</option>)
  const navigate = useNavigate();
  const [select,setSelect]=useState()
  const [list,setList]=useState()
  const [formData, setFormData] = useState({});
  const [totalOrder,setTotalOrder] = useState(0)
  const [totalPrice,setTotalPrice]= useState(0)
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
      let i =0
      let price = 0
      console.log(resu)
      let data = resu.data.map((name,index)=>{
        console.log(name)

        for(let x = 0;x<name.MenuItems.length;x++){
          i+=1;
          price = price + name.MenuItems[x].price * name.MenuItems[x].OrderDetail.quantity;
        }
        return(
            <option value={name.id} key={index}>{name.id}</option>
        )
      })
      console.log(i)
      setTotalOrder(totalOrder+i)
      setMenuitem(data)
      setTotalPrice(price)
      axios.get('http://localhost:3001/customer/menu',{
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      }).
      then(res=>{
        console.log(res);
        let insert = []
        for(let i=0;i<res.data.length;i++){
          console.log(res.data[i].name)
          insert.push({type:res.data[i].name,value:0})
        }
        resu.data.forEach((name,index)=>{
          for(let x = 0;x<name.MenuItems.length;x++){
            i+=1;
            let value = name.MenuItems[x].name
            console.log(name.MenuItems[x].name)
            insert.find(o => o.type === name.MenuItems[x].name).value+=1
          }
        })
        setData(insert)
      })
    })

  },[]);

  useEffect(() => {
    if(select!==undefined){
    axios.get(`http://localhost:3001/customer/data/${select}`,{
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    }).then(resu=>{
      console.log(resu)

      let data = resu.data.MenuItems.map((name,index)=>{
        console.log(name)
        // <p>{name.name}</p>
        return(
            <div className="customer-db-third-customerorders-detail-cont-2">
              <div className="customer-db-third-customerorders-detail">
                <img
                    className="customer-db-menu-img"
                    src={name.img}
                ></img>
              </div>
              <div className="customer-db-third-customerorders-detail">
                {name.name}
              </div>
              <div className="customer-db-third-customerorders-detail">
                {name.price}
              </div>
              <div className="customer-db-third-customerorders-detail">
                {name.OrderDetail.quantity}
              </div>
            </div>
        )
      })
      setList(data)
    })}
},[select]);

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    autoFit:true,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <div className="customer-db-cont">
      <div className="customer-db-buttons">
        <p onClick={()=>{
            localStorage.removeItem('jwt')
            navigate('/login')
        }
        }>LOGOUT</p>
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
            <h4>{totalOrder}</h4>
          </div>
        </div>
        <div className="customer-db-second-content-cont">
          <div className="customer-db-second-content-detail">
            <h4>Total Spent</h4>
          </div>
          <div className="customer-db-second-content-detail">
            <h4>{totalPrice}.00    Bath</h4>
          </div>
        </div>
        <div className="customer-db-second-content-cont-pie">
          <Pie {...config} />
        </div>
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
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
