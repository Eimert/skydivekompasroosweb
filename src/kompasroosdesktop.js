import React from "react";
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import {withStyles} from "@material-ui/core";

import Header from "./components/header";
import About from "./scenes/about";
import Settings from "./scenes/settings";
import Canopy from "./scenes/canopy";
import Desktop from "./scenes/desktop";
import Manufacturer from "./scenes/manufacturer";

import KompasroosRoute from "./kompasroosroute";


const styles = theme => ({
  row: {
    display: "flex",
  },

  column: {
    flex: "50%",
  }
});


function KompasroosDesktop(props) {

  return (
    <BrowserRouter>
      <div>
        <Header
          {...props}
        />
        <Switch>
          <KompasroosRoute
            exact path="/"
            component={Desktop}

            {...props}
          />
          <KompasroosRoute
            path="/about"
            component={About}

            {...props}
          />
          <KompasroosRoute
            path="/settings"
            component={Settings}

            {...props}
          />
          <KompasroosRoute
            path="/canopy/:slug"
            component={Canopy}

            {...props}
          />
          <KompasroosRoute
            path="/manufacturer/:slug"
            component={Manufacturer}

            {...props}
          />
          <Redirect to="/"/>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default withStyles(styles)(KompasroosDesktop);