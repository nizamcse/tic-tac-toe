import React from "react";
import { makeStyles } from "@mui/styles";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { cyan } from "@mui/material/colors";
const useStyles = makeStyles({
  root: {
    padding: "100% 0px 0px 0px !important",
    backgroundColor: `${cyan["A400"]} !important`,
    width: "100%",
    borderRadius: "0 !important",
    position: "relative",
    "&.MuiIconButton-colorPrimary": {
      color: "#9c27b0 !important",
    },
    "&.MuiIconButton-colorSecondary": {
      color: "#1976d2 !important",
    },
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
  },
});

const Square = ({ value, onClick }) => {
  const classes = useStyles();
  if (value)
    return (
      <IconButton
        className={classes.root}
        aria-label={value === "X" ? "ClearIcon" : "StarBorderPurple500Icon"}
        color={value === "X" ? "primary" : "secondary"}
        disabled
      >
        {value === "X" ? (
          <ClearIcon className={classes.icon} />
        ) : (
          <StarBorderPurple500Icon className={classes.icon} />
        )}
      </IconButton>
    );
  return (
    <IconButton
      className={classes.root}
      aria-label="empty-btn"
      color="secondary"
      onClick={onClick}
    ></IconButton>
  );
};

export default Square;
