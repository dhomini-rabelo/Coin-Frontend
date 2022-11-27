import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/cadastro'
import { AccountPage } from './pages/perfil'
import { LoginPage } from './pages/login'
import { BillPage } from './pages/contas'
import { IncomePage } from './pages/renda'
import { NotificationsPage } from './pages/alertas'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/perfil" element={<AccountPage />} />
        <Route path="/contas" element={<BillPage />} />
        <Route path="/renda" element={<IncomePage />} />
        <Route path="/alertas" element={<NotificationsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
