import React, { useState } from "react"
import Validations from "../utils/Validations"

const banner = "https://jellysmack-rick-and-morty.netlify.app/img/rickmortylogo.1eb812f0.png"

export default function Form(props){
    
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const {name , value} = event.target;
        setUserData({
            ...userData,
            [name] : value
        })
        setErrors(
            Validations({
                ...userData,
                [name] : value 
            })
        );
    }

    const [errors, setErrors] = useState({
        email: "Ingrese su email",
        password: "Ingrese su password"
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

    return(
        <div>
            <img src={banner} alt="" style={{width:"600px"}}/>
            <form onSubmit={handleSubmit}> 
                <label>
                    Email:
                </label>
                <input 
                    type="email"
                    key="email"
                    name="email"
                    value={userData.email}
                    placeholder="ingresar email..."
                    onChange={handleChange}
                />
                <p style={{color:"red"}}>
                    {
                        errors.email ? errors.email : null
                    }
                </p>
                <br />
                <label>
                    Password:
                </label>
                <input 
                    type="password"
                    key="password"
                    name="password"
                    value={userData.password}
                    placeholder="ingresar password..."
                    onChange={handleChange}
                />
                <p style={{color:"red"}}>
                    {
                        errors.password ? errors.password : null
                    }
                </p>
                <br />
                <button type="submit" disabled={errors.email || errors.password}>Submit</button>
            </form>
        </div>
    )
}