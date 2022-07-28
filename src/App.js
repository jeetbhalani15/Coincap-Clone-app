import './App.css';
import { CurrCryptoInfo } from './Components/CurrCyptoInfo/CurrCryptoInfo';
import { CurrMarketInfo } from './Components/MarketSnapShot/CurrMarketInfo';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <CurrMarketInfo/>
     <CurrCryptoInfo/>
    </div>
  );
}

export default App;
