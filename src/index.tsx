import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={'/'} element={<App />} />
      </Routes>
    </Router>
  </Provider>
);