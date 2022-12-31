import React, { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Dashboard = props => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

const test=()=>{
    axios
        .get(`http://localhost:3001/customer/`,{
            headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}
        }).then(res=>{
            console.log("click")
    })
}
    return (
        <div>
            <h1 >Dash Board</h1>
            <button onClick={test}>Test</button>
        </div>
    )
}

export default Dashboard