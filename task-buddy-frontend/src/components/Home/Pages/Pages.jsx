import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Page from "./Page/Page";
import { getPages, createPage } from "../../../actions/pages";

const Pages = () => {
  const [page, setPage] = useState({ title: "" });
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPage((oldPage) => ({ ...oldPage, [name]: value }));
  };

  const handleAddPage = (event) => {
    event.preventDefault();
    dispatch(createPage(page));
    setPage({ title: "" });
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item md={12}>
        <form style={{ margin: "10px 0" }} onSubmit={handleAddPage}>
          <TextField
            name="title"
            required
            value={page.title}
            placeholder="New Page"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <AddCircleOutlineRoundedIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: { color: "#fff" },
              inputProps: { minLength: 2, maxLength: 10 },
            }}
          />
        </form>
      </Grid>
      {pages.map((page) => (
        <Grid item key={page._id} xs={12}>
          <Page page={page} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Pages;
