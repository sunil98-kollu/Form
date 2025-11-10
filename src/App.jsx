import React from 'react'

export default function App() {
 const[data,setdata]=React.useState({name:'',age:''});

function handleChange(e){
 setdata({
      ...data,
      [e.target.name]: e.target.value
    });
}
   function onsubmit(e){
    e.preventDefault();
        console.log(data);
   }
  return (
    <>
      <h1>react form</h1>
     <>
    
    <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          required
        /><br/><br/>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        /><br/><br/>
      <button onClick={onsubmit}>submit</button>
    </>
    </>
  )
}
