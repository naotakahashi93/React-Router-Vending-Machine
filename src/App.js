import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <VendingMachine/>
    </div>
  );
}

export default App;
