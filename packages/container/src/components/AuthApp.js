import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default ({ onSignIn, isSignedIn }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  },[isSignedIn]);

  useEffect(() => {
    mount(ref.current, {
      onSignIn
    });
  }, []);

  return <div ref={ref} />;
};
