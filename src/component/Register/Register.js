import React, { useState } from 'react'
import AuthUser from '../../API/http';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate=useNavigate();
    const {http,setToken}=AuthUser();
    const [username,setUsername]= useState("");
    const [password,setPassword]=useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };


    
    const submitRegister=()=> {
      const formData = new FormData();
      formData.append('image', selectedFile);

      http.post("/register ",{name:username,email:username,password:password,picture:selectedFile},{headers: {"content-type": "multipart/form-data",}}).then((response)=>{
        console.log(response.data);

      }).catch(error => {
        console.log(error);
      });
    }
    



    
    const submitLogin=()=>{
      navigate('/login')

    }
  return (
    <div>
        
        <input name="username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
   
        <input type="file" name="image"  onChange={handleFileChange} />
        <button  onClick={submitRegister}>Register</button>
        <button  onClick={submitLogin}>login</button>
    </div>
  )
}
