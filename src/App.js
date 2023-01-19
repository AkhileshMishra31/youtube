import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./components/screens/Homescreen/Homescreen"
import { Container } from "react-bootstrap"
import "./_app.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_container'>
        <Sidebar />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
