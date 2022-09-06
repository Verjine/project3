
import './App.css';
import Lilittable from './Lilit/Lilit';
import ReactDOM from "react-dom/client";
import Zaruhi from "./Zaruhi/Zaruhi";
import Menu from "./components/Menu";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Karine from './Karine/Karine';
import Verjine from './Verjine/Verjine'

function App() {
  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu/Lilit" element={<Lilittable />} />
        <Route path="/menu/Zaruhi" element={<Zaruhi />} />
        <Route path="/menu/Karine" element={<Karine/>} />
        <Route path="/menu/Verjine" element={<Verjine/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
