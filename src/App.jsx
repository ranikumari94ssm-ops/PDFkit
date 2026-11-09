import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ToolWorkspace from './pages/ToolWorkspace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tool/:id" element={<ToolWorkspace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
