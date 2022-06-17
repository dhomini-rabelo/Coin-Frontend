import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {IndexPage} from './pages/index';
import {LoginPage} from './pages/login';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
