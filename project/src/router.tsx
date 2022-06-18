import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RegisterPage} from './pages/cadastro';
import { AccountPage } from './pages/conta';
import {IndexPage} from './pages/index';
import {LoginPage} from './pages/login';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/perfil" element={<AccountPage />} />
        <Route path="/contas" element={<AccountPage />} />
        <Route path="/renda" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}
