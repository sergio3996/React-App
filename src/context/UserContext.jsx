import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        useNavigate("./");
      })
      .catch((error) => {});
  };

  let data = {
    userSignOut,
    authUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
