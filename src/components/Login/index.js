import React from 'react'

const Login= () => {
  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
        <div className="formBoxLeftLogin">
            </div>
            <div className="formBoxRight">
                <div className="formContent">
                <h2>Inscription</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                            <label htmlFor="pseudo">Pseudo</label>
                        </div>
                        <div className="inputBox">
                            <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputBox">
                            <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <div className="inputBox">
                            <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                            <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                        </div>

                        {btn}
                    </form>
                    <div className="linkContainer">
                        <Link className="simpleLink" to="/login">Déjà inscrit ? Connectez-vous.</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
