import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export default function Header({ setSearchQuerys }) {
  const [queryText, setqueryText] = React.useState("");
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            JobHunt
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Find a job
          </Typography>

          <Typography variant="h6" color="inherit" component="div">
            Upskill Yourself
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <div>
        <InputBase
          style={{ marginLeft: "100px" }}
          placeholder="Search by job title…"
          inputProps={{ "aria-label": "search" }}
          value={queryText}
          onChange={(e) => setqueryText(e.target.value)}
        />
        <Button
          onClick={(e) => setSearchQuerys(`title=${queryText}`)}
          variant="contained"
        >
          Search
        </Button>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
