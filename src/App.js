import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </>
  );
}

export default App;
