import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  //---------------------Refactored to AuthContextProvider------------------------------

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("isLoggedIn");
  //   if (storedUser === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   console.log("logout");
  //   setIsLoggedIn(false);
  // };

  //---------------------Refactored to AuthContextProvider------------------------------

  return (
    <React.Fragment>
      <MainHeader /*isAuthenticated={isLoggedIn} onLogout={logoutHandler} */ />
      <main>
        {!ctx.isLoggedIn && <Login /*onLogin={loginHandler} */ />}
        {ctx.isLoggedIn && <Home /*onLogout={logoutHandler}*/ />}
      </main>
    </React.Fragment>
  );
}

export default App;
