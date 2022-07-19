import Login from "./Login.js";
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
import Dashboard from "./Dashboard";
import AddUser from "./AddUser";
import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";

function Nav() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/AddUser")}>
            Add User
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/Movie-List")}>
          Movie List
        </Button>
        <Button color="inherit" onClick={() => navigate("/Add-movie")}>
          Add Movie
        </Button> */}
          {/* <Button color="inherit" onClick={() => navigate("/tictactoe")}>
                Tic Tac Toe
              </Button>
              <Button color="inherit" onClick={() => navigate("/basicForm")}>
                Basic Form
              </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
