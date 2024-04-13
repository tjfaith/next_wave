// React Required
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

// Create Import File
import "./index.scss";
import "./index.css";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
import CreativeLanding from "./home/CreativeLanding";

// Element Layout
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
       
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={CreativeLanding}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
serviceWorker.register();
