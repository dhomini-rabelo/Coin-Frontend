import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

export function MainTemplate() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
