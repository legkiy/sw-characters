import './App.scss';
import List from './components/Pages/list';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import { useGetList } from './hooks/useGetList';

function App() {
  const { getList,getFavoList } = useGetList();
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<List onLoad={getList} page="list" />} />
        <Route path="/favorites" element={<List onLoad={getFavoList} page="favodites" />} />
      </Routes>
    </div>
  );
}

export default App;
