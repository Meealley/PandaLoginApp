import React from "react";

const AuthContext = React.createContext({
  login: false,
  onLogout: () => {},
});

export default AuthContext;
