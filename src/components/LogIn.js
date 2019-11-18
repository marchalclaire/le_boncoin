import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="modal">
        <span className="icon-close">X</span>
        <div className="modal-content">
          <div className="modal-wrapper">
            <div className="modal-main-title">Connexion</div>
            <div className="modal-underline"></div>
            <div className="modal-input">
              <div className="m-title">Adresse email</div>
              <input className="m-input"></input>
            </div>
            <div className="modal-input">
              <div className="m-title">Mot de passe</div>
              <input className="m-input"></input>
            </div>
            <div className="m-button bold">
              <span>Se connecter</span>
            </div>
            <div className="m-title1">Vous n'avez pas de compte ?</div>
            <div className="m-button1 bold">
              <span>Créer un compte</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
