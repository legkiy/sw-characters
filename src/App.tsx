import './App.scss';
import List from './components/Pages/list';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import { useGetList } from './hooks/useGetList';
import { useState } from 'react';

function App() {
  const { getList, getFavoList } = useGetList();

  const [curreentPage, setCurrentPage] = useState(1);

  return (
    <div className="app">
      <Menu setCurrentPage={setCurrentPage} />
      <div className="content">
        <div
          className="set-page-wraper prev"
          onClick={() => setCurrentPage((prev) => (prev !== 1 ? prev - 1 : 1))}
        >
          <div className="set-page">
            <img src="/image/prev-page.svg" />
            Prev page
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <List
                onLoad={getList}
                page="list"
                curreentPage={curreentPage}
                setCurreentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <List
                onLoad={getFavoList}
                page="favodites"
                curreentPage={curreentPage}
                setCurreentPage={setCurrentPage}
              />
            }
          />
        </Routes>
        <div
          className="set-page-wraper next"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <div className="set-page">
            Next page
            <img src="/image/next-page.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
