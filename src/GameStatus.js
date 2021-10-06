import React from "react";
import { makeStyles } from "@mui/styles";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ClearIcon from "@mui/icons-material/Clear";
const useStyles = makeStyles({
  icon: {
    verticalAlign: "middle",
    color: "red",
    width: "12px !important",
  },
});
const GameStatus = ({ status, xIsNext }) => {
  const classes = useStyles(0);
  if (status === "X")
    return (
      <span>
        PLAYER <ClearIcon className={classes.icon} /> WIN
      </span>
    );
  else if (status === "O")
    return (
      <span>
        PLAYER <StarBorderPurple500Icon className={classes.icon} /> WIN
      </span>
    );
  else if (status === "D") return <span>GAME DRAWN!</span>;
  else if (xIsNext)
    return (
      <span>
        PLAYER <ClearIcon className={classes.icon} /> TURN.
      </span>
    );
  else
    return (
      <span>
        PLAYER <StarBorderPurple500Icon className={classes.icon} /> TURN.
      </span>
    );
};

export default GameStatus;
