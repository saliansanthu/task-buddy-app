import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  color: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#455e89",
    minHeight: "50px",
    minWidth: "200px",
    maxHeight: "400px",
    maxWidth: "400px",
    margin: "10px",
    textAlign: "center",
    float: "left",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
}));
