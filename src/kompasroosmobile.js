import React from "react";
import {BrowserRouter, Redirect, Switch} from "react-router-dom";

import Header from "./components/header";
import List from "./scenes/list";
import About from "./scenes/about";
import Settings from "./scenes/settings";
import SetJumps from "./scenes/setjumps";
import SetWeight from "./scenes/setweight";
import Canopy from "./scenes/canopy";
import Manufacturer from "./scenes/manufacturer";
import Footer from "./components/footer";

import KompasroosRoute from "./kompasroosroute";

function KompasroosMobile(props) {
  return (
    <BrowserRouter>
      <div>
        <Header
          {...props}
        />
        <Switch>
          <KompasroosRoute
            exact path="/"
            component={List}

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
            path="/setjumps"
            component={SetJumps}

            {...props}
          />
          <KompasroosRoute
            path="/setweight"
            component={SetWeight}

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
        <Footer
          {...props}
        />
      </div>
    </BrowserRouter>

  );

}

export default KompasroosMobile