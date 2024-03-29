import React, { useEffect } from 'react';
import Header from "./components/header.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contactus from "./components/contact.component";
import Home from "./components/home.component";
import Aboutus from "./components/about.component";
import Footer from "./components/footer.component";
import Members from "./components/members.component";
import Updates from "./components/updates.component";
import "./App.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Router>
        <Header className="Header" />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition key= {location.key} timeout={450} classNames="fade">
                <Switch location= {location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/contactus" exact component={Contactus} />
                  <Route path="/aboutus" exact component={Aboutus} />
                  <Route path="/members" exact component={Members} />
                  <Route path="/updates" exact component={Updates} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer className="Footer" />
      </Router>
    </div>
  );
}

export default App;
