
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./Assets/Paginas/PaginaInicial";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
