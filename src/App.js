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

function App() {
  return (
    <SocietyUserProvider>
      {/* <VisitorContextProvider> */}
      
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='registrationPage' element={<Registration/>}/>
            <Route path='userPage' element={<UserPage/>}/>
            <Route path='guardPage' element={<GuardPage/>}/>
          </Route>
        </Routes>
      {/* <div className="App"> */}
        {/* <Navbar/>
        <Home/> */}
        {/* <UserPage/> */}
        {/* <GuardPage/> */}
        {/* <Registration/> */}
      {/* </div> */}
      {/* </VisitorContextProvider> */}
    </SocietyUserProvider>

  );
}

export default App;
