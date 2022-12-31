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


    return (
        <div>
            <h1>Dash Board</h1>
        </div>
    )
}

export default Dashboard