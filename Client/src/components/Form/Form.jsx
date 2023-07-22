import React, { useState } from "react"
import validation from "./Validation.jsx"
import style from "./Form.module.css"


export default function Form (props) {

    const [userData, setUserData] = useState({
        email :"",
        password : ""
    })
    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setUserData({...userData, [event.target.name] : event.target.value})
       setErrors(validation({ ...userData, [event.target.name] : event.target.value}))
       
    };


    const handleInputs = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
       
            <div className={style.background}>
               
                <form className={style.forms} onSubmit={handleInputs}>
                    
                    <img className= {style.foto} src="https://img.asmedia.epimg.net/resizer/oOqMk3TvDdNoLhcaEwC_U3pFi_g=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MJLAZUYQGBH4JOJPG6N2XXDAG4.jpg" ></img>
                    <br></br>
                    <label>Email:</label>
                    <input  className={style.inputs}type="email" placeholder="Escribe tu correo..." value={userData.email} onChange={handleChange} name="email" ></input>
                    <br></br>
                    {errors.email && <p>{errors.email}</p>}
                    <br></br>
                    <label>Password:</label>
                    <input  className={style.inputs} type="password" placeholder="Escribe tu contraseña..." value={userData.password} onChange={handleChange} name="password"></input>
                    <br></br>
                    {errors.password && <p>{errors.password}</p>}
                    <br></br>
                    <button type ="submit">Submit</button>
                </form>
           </div>
     
    )
}