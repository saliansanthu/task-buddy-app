import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    backgroundColor: "#455e89",
    justifyContent: "space-between",
    padding: "10px 10px",
    flexDirection: "row",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    margin: "2px",
  },
  account: {
    display: "flex",
    alignItems: "center",
    margin: "2px",
  },
  avatar: {
    backgroundColor: "#fff",
    color: "#455e89",
    fontSize: 15,
    margin: "5px",
  },
  button: {
    fontSize: 15,
    margin: "5px",
  },
}));
