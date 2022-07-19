import "./App.css";
import Login from "./components/Login.js";
import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Routes,
  Route,
  Router,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Nav from "./components/Nav";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/AddUser" element={<AddUser />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
