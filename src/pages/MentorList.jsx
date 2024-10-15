import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MentorForm from '../components/MentorForm.jsx';
import '../styles/MentorForm.css';

function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await axios.get('https://mentorstudent-frontend.onrender.com/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const handleSubmit = async (mentorData) => {
    try {
      console.log('Sending data:', mentorData);
      const response = await axios.post('https://mentorstudent-frontend.onrender.com/api/mentors', mentorData);
      console.log('Response:', response.data);
      fetchMentors();
      setNotification('Mentor added successfully!');
      setTimeout(() => setNotification(''), 3000);
    } catch (error) {
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
      setNotification('Error adding mentor. Please try again.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className="mentor-list-container">
      <h2 className="mentor-list-title">Mentor</h2>
      {notification && <div className="notification">{notification}</div>}
      <MentorForm onSubmit={handleSubmit} />
      <ul className="mentor-list">
        {mentors.map((mentor) => (
          <li className="mentor-item" key={mentor._id}>
            {mentor.name} - {mentor.email} - {mentor.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;