import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { signOut } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

const navigate = useNavigate();
const [checked, setChecked] = useState(false);

useEffect(() => {
  if (checked) {
    signOut(auth).then(() => {
        console.log("Vous êtes déconnecté");
        setTimeout(()=> {
          navigate('/')
        }, 1000);
    }).catch((error) => {
        console.log("Oups, nous avons une erreur !")
    });

  }

}, [checked, navigate]);

const handleChange = event => {
    setChecked(event.target.checked)
}

  return (
    <div className="logoutContainer">
        <label className="switch">
            <input
                onChange={handleChange}
                type="checkbox"
                checked={checked}
            />
            <span className="slider round"  data-tooltip-id="my-tooltip" data-tooltip-content="Déconnexion" ></span>
        </label>

<Tooltip id="my-tooltip" place="top" />
        <Tooltip
            id="my-tooltip"
            place="top"
            effect="solid"
        />
    </div>
  )
}

export default Logout
