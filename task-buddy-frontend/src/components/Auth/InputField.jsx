import { Grid, TextField } from "@material-ui/core";
import React from "react";

const InputField = ({
  half,
  name,
  handleChange,
  autoFocus,
  label,
  value,
  type,
  inputProps,
}) => {
  return (
    <Grid item sm={half ? 6 : 12} md={12}>
      <TextField
        name={name}
        placeholder={label}
        value={value}
        onChange={handleChange}
        type={type}
        autoFocus={autoFocus}
        InputProps={{ style: { color: "#fff" }, inputProps }}
        autoComplete="off"
        required
        fullWidth
      />
    </Grid>
  );
};

export default InputField;
