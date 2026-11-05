import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MergePDF from './pages/MergePdf';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/merge" element={<MergePDF />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;