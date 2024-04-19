'use client';

// import { motion } from 'framer-motion';
// import './timeline.css';
// import styles from '../styles';
// import { staggerContainer, fadeIn } from '../utils/motion';
// import { TitleText } from '../components';
// import { startingFeatures } from '../constants';

/*function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-col flex-col gap-8 m-auto`}
      >
        <TitleText title="Timeline" textStyles="text-center" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('down', 'spring', 0.2, 1.5)}
      >
        <div className="timeline">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 0.8, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">REGISTRATIONS</h2>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 0.9, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">HACKING PERIOD STARTS</h2>
                <small>3RD FEBRUARY, 2024</small>
                <p>3:00 PM onwards</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">MID EVALUATION</h2>
                <small>3RD FEBRUARY, 2024</small>
                <p>9:00 PM onwards</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.1, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">HACKING PERIOD ENDS</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:00 PM </p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1.2, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">PROJECT SUBMISSION</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:00 PM - 3:30 PM</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.2, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">FINAL EVALUATION</h2>
                <small>4TH FEBRUARY, 2024</small>
                <p>3:30 PM onwards</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted; */

/*import React, { useState } from 'react';

function GetStarted() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // Add your signup logic here, for example, sending form data to a backend server
    console.log(formData);
    // Reset form fields
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default GetStarted;
*/

// import React, { useState } from 'react';
// import './SignUp.css'; // Import CSS file

// function GetStarted() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     console.log(formData);
//     // Reset form fields
//     setFormData({
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   return (
//     <div className="signup-container">
      
//       <form onSubmit={handleSubmit} className="signup-form">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="signup-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default GetStarted;


import React, { useState } from 'react';
import './SignUp.css'; // Import your CSS file for styling
//import { GetStarted } from '.';

function GetStarted() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    // Implement sign up logic here
    console.log('Signing up with email:', email, 'and password:', password);
    // You can send a request to your backend API for signing up
  };

  const handleSignIn = () => {
    // Implement sign in logic here
    console.log('Signing in with email:', email, 'and password:', password);
    // You can send a request to your backend API for signing in
  };

  return (
    <div className="container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isSignUp ? (
        <button onClick={handleSignUp}>Sign Up</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
      </p>
    </div>
  );
}

export default GetStarted;
