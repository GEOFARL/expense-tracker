import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </>
  );
}

export default App;
