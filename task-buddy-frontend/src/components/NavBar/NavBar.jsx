import React, { useEffect } from "react";
import { AppBar, Typography, Avatar, Button } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { signOut } from "../../actions/auth";
import useStyles from "./styles";
import { resetStore } from "../../actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const classes = useStyles();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTimeStamp = new Date().getTime() / 1000;
      if (decodedToken.exp < currentTimeStamp) handleSignOut();
    }
  });

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(resetStore());
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.brand}>
        <Typography variant="h5" style={{ fontWeight: "bolder" }}>
          taskBuddy
        </Typography>
        <ListAltIcon style={{ fontSize: 35 }} />
      </div>
      <div className={classes.account}>
        {user && (
          <>
            <Avatar className={classes.avatar}>{user.name.charAt(0)}</Avatar>
            <Typography variant="h6">{user.name}</Typography>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              size="medium"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </>
        )}
      </div>
    </AppBar>
  );
};

export default NavBar;
