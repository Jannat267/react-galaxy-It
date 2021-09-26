import './App.css';
import Company from './components/company/Company';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* use header and company componants */}
     <Header></Header>
     <Company></Company>
    </div>
  );
}

export default App;
