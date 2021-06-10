import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Pages from "./Pages/Pages";
import Tasks from "./Tasks/Tasks";

const Home = () => {
  const selectedPage = useSelector((state) => state.selectedPage);
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={3}>
        <Pages />
      </Grid>
      <Grid item xs={9}>
        {selectedPage ? (
          <Tasks />
        ) : (
          <Typography variant="h5" style={{ color: "#fff" }}>
            Create a new page or select an existing page.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
