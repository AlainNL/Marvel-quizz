import React, { useRef, useEffect, useState, Fragment } from "react";

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

  const displayBtn = btn && (
    <Fragment>
      <div className="leftBox">
          <button className="btn-welcome">Inscription</button>
      </div>
      <div className="rightBox">
          <button className="btn-welcome">Connexion</button>
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
