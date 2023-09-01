import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signeup';
import ErrorPage from '../ErrorPage';
import '../../App.css';
import ForgetPassword from '../ForgetPassword';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
