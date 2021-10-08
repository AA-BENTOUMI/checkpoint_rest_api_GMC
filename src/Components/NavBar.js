import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./style.css";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: " darkslateblue" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link className="nav-link" to="/">
              <img
                src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">
              <Link className="nav-link" to="/personslist">
                Persons List
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="nav-link" to="/addperson">
                Add Person
              </Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
