import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginaPrincial from "./components/principal/PaginaPrincial";
import Footer from "./components/common/Footer";
import Headers from "./components/common/Headers"
import AgregarElementos from "./components/elementos/AgregarElementos"
import EditarElementos from "./components/elementos/EditarElementos"
import ListadeElementos from "./components/elementos/ListadeElementos"

function App() {
  return (
    <div>
      <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <PaginaPrincial/>
          </Route>
          <Route exact path="/Footer">
            <Footer/>
          </Route>
          <Route exact path="/Headers">
            <Headers/>
          </Route>
          <Route exact path="/AgregarElementos">
            <AgregarElementos/>
          </Route>
          <Route exact path="/EditarElementos">
            <EditarElementos/>
          </Route>
          <Route exact path="/ListadeElementos">
            <ListadeElementos/>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
