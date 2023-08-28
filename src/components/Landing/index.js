import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link } from 'react-router-dom';

const Landing = () => {

  const [btn, setBtn] = useState(null);

  const refWolwerine = useRef(false);

  useEffect(() => {
    refWolwerine.current.classList.add("startingImg");
    setTimeout(() => {
        refWolwerine.current.classList.remove("startingImg");
        setBtn(true)
      }, 1000);

  }, [])

  const setLeftImg = () => {
    refWolwerine.current.classList.add("leftImg");
  }

  const setRightImg = () => {
    refWolwerine.current.classList.add("rightImg");
  }

  const clearImg = () => {

      if(refWolwerine.current.classList.contains("leftImg"))  {
        refWolwerine.current.classList.remove("leftImg")
      } else if (refWolwerine.current.classList.contains("rightImg")) {
        refWolwerine.current.classList.remove("rightImg")
      }
  }

  const displayBtn = btn && (
    <Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
          <Link className="btn-welcome" to="/signup">Inscription</Link>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
          <Link className="btn-welcome" to="/login">Connexion</Link>
      </div>
    </Fragment>
  )

  return (
      <main ref={refWolwerine} className="welcomePage">
          { displayBtn }
      </main>
  )
}

export default Landing
