import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {IndexPage} from './pages/index';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}
