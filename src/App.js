import React, { useEffect } from "react";
import "./App.css";
import { setScreen } from "./features/screenSlice";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";

function App() {
  const screenDispatch = useDispatch(setScreen);

  useEffect(() => {
    if (window.outerWidth < 1000) {
      screenDispatch(setScreen("Mobile"));
    } else if (window.outerWidth < 1367 && window.outerWidth > 1000) {
      screenDispatch(setScreen("HD"));
    } else if (window.outerWidth > 1367) {
      screenDispatch(setScreen("Full HD"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/forgotPassword" exact component={ForgotPasswordPage} />
          <Route path="/resetPassword/:id/:token" exact component={ResetPasswordPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
