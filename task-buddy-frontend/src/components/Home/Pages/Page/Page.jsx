import React from "react";
import { ButtonGroup, Button, Grid } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePage } from "../../../../actions/pages";
import { selectPage, unSelectPage } from "../../../../actions/selectedPage";

const Page = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.selectedPage);

  const handleDeletePage = () => {
    if (selectedPage?._id === page._id) {
      dispatch(unSelectPage());
    }
    dispatch(deletePage(page._id));
  };

  const handleSelectPage = () => {
    dispatch(selectPage(page));
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} className={classes.page}>
        <ButtonGroup
          variant="contained"
          size="large"
          color="secondary"
          aria-label="large contained primary button group"
        >
          <Button onClick={handleSelectPage}>
            {page.title.substring(0, 10).toUpperCase()}
          </Button>
          <Button onClick={handleDeletePage}>
            <DeleteForeverIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Page;
