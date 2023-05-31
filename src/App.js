import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


const App=()=>{
  const [name,setName]=useState("");
  const[user,setUser]=useState("");

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${name}`)
    .then(res=>{
      console.log(res)
      setUser(res.data)})
    .catch(err=>console.log(err))
  },[name])

  return(
    <div>
      <input type="text"
      placeholder='Enter user name' 
      value={name} 
      onChange={(e)=>{setName(e.target.value)}}></input>
      {
        user && <div>
          <h1>{user.name}</h1>
          <img src={user.avatar_url} alt="profile" style={{width:"200px"}}></img>
          <h2>Followers : {user.followers}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank">Link to my Profile</a>
        </div>
      }
    </div>
  )
}

export default App;
