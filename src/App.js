import logo from './logo.svg';
import './App.css';
import './indiago.css';
import NavBar from './component/NavBar';
import SecondNavbar from './component/SecondNavbar';
import FirstDiv from './component/FirstDiv';
import SecondDiv from './component/SecondDiv';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SecondNavbar/>
      <FirstDiv/>
      <SecondDiv/>
      <SideMenu/>


    </div>
  );
}

export default App;
