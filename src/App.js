
import './App.css';
import Lilittable from './Lilit/Lilit';
import ReactDOM from "react-dom/client";
import Zaruhi from "./Zaruhi/Zaruhi";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';

function App() {
  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lilit" element={<Lilittable />} />
        <Route path="/zaruhi" element={<Zaruhi />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
