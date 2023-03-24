import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import HomePage from './pages/HomePage.js';
import DrinkPage from './pages/DrinkPage.js';
import MenuPage from './pages/MenuPage.js';
import Layout from './pages/Layout.js';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage.js';
import authCalls from './api/authCalls';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  // user obj: token, id, username (email)

  const getCurrentUser = async () => {
    let result = await authCalls.whoAmI();
    console.log(result);
  };

  useEffect(() => {
    getCurrentUser()
  }, [user])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage handleLogin={setUser}/>} />
              <Route path="/signup" element={<SignUpPage handleSignin={setUser} />} />
              <Route path="/drinkmenu" element={<DrinkPage />} />
              <Route path="/foodmenu" element={<MenuPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;



// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {path: "/",
//       element: <HomePage />,
//       errorElement: <ErrorPage />},
//       {path: "/drinkmenu",
//       element: <DrinkPage />,
//       errorElement: <ErrorPage />}, 
//       {path: "/profile",
//       element: <ProfilePage />,
//       errorElement: <ErrorPage />}
//     ]
//   }
// ])