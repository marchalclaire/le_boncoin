import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Cookies from "js-cookie";

const App = () => {
  // Nous allons initialiser l'état user à partir de ce qui se trouve dans les cookies
  // L'état `user` servira à sauvegarder l'utilisateur qui sera authentifié
  //on crée une variable const userCookie qui est égale à la valeur du cookie. Si user=Farid, Cookies.get("user")=Farid.
  const userCookie = Cookies.get("user");
  console.log(userCookie); // Lorsque le cookie n'existe pas, la valeur vaut undefined
  const [user, setUser] = useState(userCookie);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Header
        // on transmet des infos à l'enfant Header (user et fonctions logIn et logOut)
        user={user}
        // en cas de déconnection, on supprime le cookie "user", le useState passe de "userCookie" (valeur de user) => à "null"
        logOut={() => {
          Cookies.remove("user");
          setUser(null);
        }}
        //en cas de déconnection, on enregistre le cookie pour la persistance des données
        logIn={obj => {
          Cookies.set("user", obj.name);
          //puis on sauvegarde l'état "user" pour déclencher un raffraichissement :
          setUser(obj); //l'obj est dans Header => name: "Claire"
          setShowModal(true);
        }}
      ></Header>

      {showModal === true && <LogIn></LogIn>}
      <Switch>
        <Route path="/offer/:identifiant">
          <Offer user={user} />
        </Route>
        <Route path="/">
          <Offers user={user} />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};
export default App;
