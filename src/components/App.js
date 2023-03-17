import React, { useState } from 'react';
import '../styles/App.css';
import  {signUpFormValidation} from "../utils/validation";

const App = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    consent: false
  })
const [errors,setErrors] = useState({});

  const handleName =(e)=>{
    setFormData({...formData,name:e.target.value})
    if(errors.name){
      setErrors({...errors,name:null});
    }
  }
  const handleEmail =(e)=>{
    setFormData({...formData,email:e.target.value})
    if(errors.email){
      setErrors({...errors,email:null});
    }
  }
  const handlePassword =(e)=>{
    setFormData({...formData,password:e.target.value})
    if(errors.password){
      setErrors({...errors,password:null});
    }
  }
  const handleConsent =(e)=>{
    setFormData({...formData,consent:e.target.value})
  }

  const handleChange = (e)=>{
    e.preventDefault();
     const validationError= signUpFormValidation(formData);
     if(validationError){
      setErrors(validationError)
     }else
     {
       
     }
  }
  return (
<div className='App'>
<form onSubmit={handleChange}>
<label for="name">Name</label>
  <input type="text" id="name" name="name" value={formData.name} onChange={handleName}></input> <br/>
  {errors.name && <div className='error'>{errors.name}</div>}
  <label for="name">Email</label>
  <input type="email" id="email" name='email' value={formData.email} onChange={handleEmail}></input> <br/>
  {errors.email && <div className='error'>{errors.email}</div>}
  <label for="password">Password</label>
  <input type="password" id="password" name='password' value={formData.password} onChange={handlePassword}></input> <br/>
  {errors.password && <div className='error'>{errors.password}</div>}
  <label>Checkbox</label>
  <input type="checkbox" id="consent" checked={formData.consent} onChange={handleConsent}></input> <br/>
  {errors.consent && <div className='error'>{errors.consent}</div>}
  <button type='submit'>Signup</button>

</form>
</div>
  )
}


export default App;

