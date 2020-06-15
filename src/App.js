import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />

        <Switch>
          {/* MORE PAGES TO BE ADDED HERE LATER */}
          <Route path="/posts/:id" component={PostPage} />
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
