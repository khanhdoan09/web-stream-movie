import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/detail/home";
import List from "./components/list/list";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/main.css';
import { createStoreHook } from "react-redux";
import rootReducers from "./reducers/rootReducers";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<List />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="list" element={<List />}>
          <Route path="list/:pagination" exact={true} element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);