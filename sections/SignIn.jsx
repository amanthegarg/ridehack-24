import React, { useState } from 'react';
import './SignIn.css'; // Import CSS file

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
