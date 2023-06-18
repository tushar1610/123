import './App.css';
import GuardPage from './components/GuardPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import UserPage from './components/UserPage';
import { SocietyUserProvider } from './context/SocietyUserContext';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLoginProvider } from './context/UserLoginContext';
import { VisitorContextProvider } from './context/VisitorContext';
import { GuardContextProvider } from './context/GuardContext';
import UserProfile from './components/UserProfile';
import GuardProfile from './components/GuardProfile';

function App() {
  return (
    <UserLoginProvider>
    <SocietyUserProvider>
      <GuardContextProvider>
      <VisitorContextProvider>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='registrationPage' element={<Registration/>}/>
            <Route path='userPage' element={<UserPage/>}/>
            <Route path='guardPage' element={<GuardPage/>}/>
            <Route path='userProfile' element={<UserProfile/>}/>
            <Route path='guardProfile' element={<GuardProfile/>}/>
          </Route>
        </Routes>
      </VisitorContextProvider>
      </GuardContextProvider>
    </SocietyUserProvider>
    </UserLoginProvider>

  );
}

export default App;
