import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = props => {

  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);


  useEffect(() => {
    const listener = onAuthStateChanged(auth, user => {
        user ? setUserSession(user) : navigate('/')
    })
    return listener();
}, [navigate])

  return userSession === null ? (
      <Fragment>
          <div className="loader">
          </div>
      </Fragment>
  ) : (
      <div className="quiz-bg">
          <div className="container">
            <Logout />
            <Quiz />
          </div>
      </div>
  )
}

export default Welcome
