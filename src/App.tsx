import './App.scss';
import List from './components/Pages/list';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/favorites" />
      </Routes>
    </div>
  );
}

export default App;
