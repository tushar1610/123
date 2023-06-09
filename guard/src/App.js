import './App.css';
import GuardPage from './components/GuardPage';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import UserPage from './components/UserPage';
import { SocietyUserProvider } from './context/SocietyUserContext';

function App() {
  return (
    <SocietyUserProvider>
      <div className="App">
        {/* <Navbar/>
        <Home/> */}
        {/* <UserPage/> */}
        {/* <GuardPage/> */}
        <Registration/>
      </div>
    </SocietyUserProvider>
  );
}

export default App;
