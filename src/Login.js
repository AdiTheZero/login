import React from "react"
import {useState,  useEffect} from "react";
import {Route, Router} from "react-router-dom";
import { useNavigate  } from "react-router-dom";

function Login()
{

    let navigate = useNavigate();
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    useEffect(()=> {
    
        let data={
            name :"abc",
            email :"abc@gmail.com",
            mobile :"123456789",
            timestamp : ""
        }
        localStorage["users"]=JSON.stringify(data)
    //localStorage["msgs"]=JSON.stringify([])
    },[])
     const click= ()=>
    {
     console.log( name)
     let data=JSON.parse(localStorage['users'])
     console.log (data)
     if(name===data.name && email===data.email && mobile ===data.mobile)
     {
       navigate ("/home");
       }
     else
     {
        alert("login-fail")
     }

    }
    
    return<>
    <div style={ { display: "flex", flexDirection : "column", textAlign :"center", padding :"15%" } }>
        <h1> 
            Login Page
        </h1>
        
        <lable>
        username
      
        </lable> 

        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <label>
            Email
        </label>
        <input type="text" value={email} onChange={ (e)=> setEmail (e.target.value)}/>
        <label>
             Mobile Number
        </label>
        <input type="number"  value={mobile} onChange ={ (e)=> setMobile (e.target.value)}/>

        <button  onClick={click}>Submit</button>
    </div>
    </>
}
export default Login