import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import Header from "../component/Header";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";

export default function FindJob() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuerys] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    fetch(`http://localhost:8000/jobs?${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [searchQuery]);

  return (
    <div>
      <Header setSearchQuerys={setSearchQuerys} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {jobs &&
            jobs.map((job) => {
              return (
                <Grid item xs={6} md={4}>
                  <Item>
                    <Card key={job.id} job={job} />
                  </Item>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
