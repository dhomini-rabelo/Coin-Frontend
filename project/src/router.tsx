import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RegisterPage} from './pages/cadastro';
import {IndexPage} from './pages/index';
import {LoginPage} from './pages/login';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
