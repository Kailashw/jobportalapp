import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

export default function Header({ setSearchQuerys }) {
  const [locationqueryText, setLocationqueryText] = React.useState("");
  const [titlequeryText, setTitlequeryText] = React.useState("");

  const handleSubmit = () => {
    let queryText = "";
    if (locationqueryText && titlequeryText) {
      queryText = `location=${locationqueryText}&title=${titlequeryText}`;
    } else {
      queryText = locationqueryText
        ? `location=${locationqueryText}`
        : `title=${titlequeryText}`;
    }
    setSearchQuerys(queryText);
  };
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
          value={titlequeryText}
          onChange={(e) => setTitlequeryText(`${e.target.value}`)}
        />
        <InputBase
          style={{ marginLeft: "100px" }}
          placeholder="Search by job location"
          inputProps={{ "aria-label": "search" }}
          value={locationqueryText}
          onChange={(e) => setLocationqueryText(`${e.target.value}`)}
        />
        <Button onClick={handleSubmit} variant="contained">
          Search
        </Button>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
