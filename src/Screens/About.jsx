import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  const changePageHandler = () => {
    navigate("/");
  };
  return (
    <div>
          <h1>Welcome to the About page</h1>
          <button onClick={changePageHandler}>About page</button>
        </div>
  )
}

export default About