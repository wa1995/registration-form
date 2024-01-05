

import React, { useEffect, useState } from 'react'

function Form() {
    //To save input values we have to make object
    const data = {name:"", email:"", password:""}

    //To handle input values we need useState
    const [inputData, setInputData] = useState(data)

    // State to control the display of the registration message
    const [flag, setFlag] = useState(false)
    useEffect(()=>{

    },[flag])

    // Handle input changes and update the state
    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
    }
    // Handle form submission
    function handleSubmit(e){
        e.preventDefault();

        // Check if any of the fields are empty
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are mandatory")
        }

        else{
            setFlag(true)
        }
    }
  return (

    <>
    <pre>{(flag)?<h2 className='ui'>Hi, {inputData.name} You're Registered</h2> :""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}></input> 
            {/* to store input value we use "Vlaue" and we need handler handler as well */}
                   
        </div>
        <div>
            <input type='text' placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        
      
    </form>
    </>
  )
}

export default Form;

