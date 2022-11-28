import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/cadastro'
import { AccountPage } from './pages/perfil'
import { LoginPage } from './pages/login'
import { BillPage } from './pages/contas'
import { IncomePage } from './pages/renda'
import { NotificationsPage } from './pages/alertas'
import { AuthenticatedRoutes } from './code/templates/Auth'
import { MainTemplate } from './layout/templates/Main'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route element={<AuthenticatedRoutes />}>
          <Route element={<MainTemplate />}>
            <Route path="/renda" element={<IncomePage />} />
            <Route path="/contas" element={<BillPage />} />
            <Route path="/alertas" element={<NotificationsPage />} />
            <Route path="/perfil" element={<AccountPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
