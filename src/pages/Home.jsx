import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to MentorStudent API</h1>
      <p className="home-description">Manage mentors and students with ease.</p>
    </div>
  );
}

export default Home;