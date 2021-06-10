import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: "8px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#455e89",
    color: "#fff",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "#455e89",
  },
  lock: {
    fontSize: 18,
  },
  form: {
    width: "100%",
  },
  button: {
    marginTop: "20px",
  },
}));
