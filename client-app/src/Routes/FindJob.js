import React, { useState, useEffect } from "react";
import Card from "../component/Card";

export default function FindJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      {jobs &&
        jobs.map((job) => {
          return <Card key={job.id} job={job} />;
        })}
    </div>
  );
}
