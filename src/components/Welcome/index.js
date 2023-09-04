import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, user } from '../Firebase/firebaseConfig';
import { getDoc } from 'firebase/firestore';
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = props => {

  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const listener = onAuthStateChanged(auth, user => {
        user ? setUserSession(user) : navigate('/')
    })

    if (!!userSession) {

        const colRef= user(userSession.uid);

        getDoc(colRef)
        .then ( snapshot => {
          if (snapshot.exists()) {
              const docData = snapshot.data();
              setUserData(docData);
          }
        })
        .catch( error => {
            console.log(error);
        })
    }

    return listener();
}, [navigate, userSession])

  return userSession === null ? (
      <Fragment>
          <div className="loader">
          </div>
      </Fragment>
  ) : (
      <div className="quiz-bg">
          <div className="container">
            <Logout />
            <Quiz userData={userData} />
          </div>
      </div>
  )
}

export default Welcome
