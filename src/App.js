import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import TemplateAutomation from "./components/TemplateAutomation";
import DeployApplications from "./components/DeployApplications";

import Option1 from "./components/Option1";
import Option2 from "./components/Option2";
import Option3 from "./components/Option3";

import Doption1 from "./components/Doption1";
import Doption2 from "./components/Doption2";
import Doption3 from "./components/Doption3";

import NotFound from "./components/NotFound";
import TerraformDocs from "./components/TerraformDocs";
import TerraformRegistry from "./components/TerraformRegistry";

import "./index.css";
import Footer from "./components/Footer";

function App() {
  const [showTemplateOptions, setShowTemplateOptions] = useState(false);
  const [showDeployOptions, setShowDeployOptions] = useState(false);
  const [showTerraformOptions, setTerraformOptions] = useState(false);

  const toggleTemplateOptions = () => {
    setShowTemplateOptions(!showTemplateOptions);
    // console.log(showTemplateOptions);
  };

  const toggleDeployOptions = () => {
    setShowDeployOptions(!showDeployOptions);
    // console.log(showDeployOptions);
  };

  const toggleTerraformOptions = () => {
    setTerraformOptions(!showTerraformOptions);
    // console.log(showDeployOptions);
  };

  return (
    <Router>
      <div>
        <header>
          <h1 className="header text1">Devops Practice</h1>
        </header>
        <nav>
          <ul className="ullist">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <div onClick={toggleTemplateOptions} className="click">
                TemplateAutomation
              </div>
              {showTemplateOptions && (
                <ul>
                  <li>
                    <Link to="/template-automation/option1" className="link">
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/template-automation/option2" className="link">
                      Option 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/template-automation/option3" className="link">
                      Option 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleTemplateOptions}
              >
                TemplateAutomation
              </a>
              {showTemplateOptions && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/template-automation/option1"
                      className="dropdown-item"
                    >
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/template-automation/option2"
                      className="dropdown-item"
                    >
                      Option 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/template-automation/option3"
                      className="dropdown-item"
                    >
                      Option 3
                    </Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li>
              <div onClick={toggleDeployOptions} className="click">
                DeployApplications
              </div>
              {showDeployOptions && (
                <ul>
                  <li>
                    <Link to="/deploy-applications/option1" className="link">
                      Option 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/deploy-applications/option2" className="link">
                      Option 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/deploy-applications/option3" className="link">
                      Option 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleTerraformOptions} className="click">
                Terraform
              </div>
              {showTerraformOptions && (
                <ul>
                  <li>
                    <Link to="/terraform/terraform-docs" className="link">
                      Terraform Docs
                    </Link>
                  </li>
                  <li>
                    <Link to="/terraform/terraform-registry" className="link">
                      Terraform Registry
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/template-automation/option1" component={Option1} />
            <Route path="/template-automation/option2" component={Option2} />
            <Route path="/template-automation/option3" component={Option3} />

            <Route path="/deploy-applications/option1" component={Doption1} />
            <Route path="/deploy-applications/option2" component={Doption2} />
            <Route path="/deploy-applications/option3" component={Doption3} />

            <Route path="/terraform/terraform-docs" component={TerraformDocs} />
            <Route
              path="/terraform/terraform-registry"
              component={TerraformRegistry}
            />

            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
