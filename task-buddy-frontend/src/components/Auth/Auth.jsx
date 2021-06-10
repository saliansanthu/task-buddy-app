import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { Avatar } from "@material-ui/core";
import { signIn, signUp } from "../../actions/auth";
import InputField from "./InputField";

const defaultForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [isRegistered, setIsRegistered] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleChangeForm = () => {
    setIsRegistered(!isRegistered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistered) {
      dispatch(signIn(formData));
    } else {
      dispatch(signUp(formData));
    }
    setFormData(defaultForm);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.lock} />
        </Avatar>
        <Typography variant="h5">
          {isRegistered ? "Sign In" : "Sign Up"}
        </Typography>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            {!isRegistered && (
              <>
                <InputField
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  value={formData.firstName}
                  type="text"
                />
                <InputField
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                  value={formData.lastName}
                  type="text"
                />
              </>
            )}
            <InputField
              name="email"
              type="email"
              label="Email Address"
              handleChange={handleChange}
              value={formData.email}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              handleChange={handleChange}
              value={formData.password}
              inputProps={{ minLength: 5, maxLength: 10 }}
            />
            {!isRegistered && (
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
                value={formData.confirmPassword}
                inputProps={{ minLength: 5 }}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            {!isRegistered ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Button onClick={handleChangeForm} fullWidth size="small">
                {!isRegistered
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
