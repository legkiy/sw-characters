import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import List from './components/List/index.tsx';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route
          path={'/list'}
          element={<List />}
        />
      </Routes>
    </Router>
  </Provider>
);
