import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../store/auth/selector";
import { logout } from "../store/auth/actions";

export default function Toolbar() {
  const dispatch = useDispatch();
  const loggedInUserName = useSelector(authUser);

  function loggingOut() {
    dispatch(logout);
  }

  return (
    <div>
      {!loggedInUserName ? (
        <Link to="/login">LOGIN IN!</Link>
      ) : (
        <>
          <h2>Welcome back, {loggedInUserName}!</h2>
          <button onClick={loggingOut}>Logout</button>
        </>
      )}
      <h2>{loggedInUserName}</h2>
      <h1>HI I AM TOOLBAR-SAMA! </h1>
      <p>GAMBATTE !!! FIGHTOOOOOO!!!!</p>
    </div>
  );
}
