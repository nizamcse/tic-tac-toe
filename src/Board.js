import React, { useState } from "react";
import { Box, Grid, Alert, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Square from "./Square";
import GameStatus from "./GameStatus";
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "320px !important",
    display: "flex !important",
    height: "100vh",
    alignItems: "center",
    padding: "8px !important",
  },
  contentWraper: {
    width: "100%",
  },
  message: {
    fontSize: "12px !important",
    lineHeight: "1 !important",
    display: "flex !important",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  alertIcon: {
    alignItems: "center",
    fontSize: "14px !important",
    marginRight: "4px !important",
  },
}));
function Board() {
  const classes = useStyles();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);
  const handleClick = (i) => {
    const sqr = squares.slice();
    if (gameStatus || sqr[i]) {
      return;
    }
    sqr[i] = xIsNext ? "X" : "O";
    setSquares(sqr);
    let gStatus = calculateWinner(sqr);
    setGameStatus(gStatus);
    setXIsNext((prev) => !prev);
  };
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus(null);
  };
  return (
    <Container className={classes.container} fixed>
      <Box className={classes.contentWraper}>
        <Box>
          <Alert
            severity="info"
            classes={{ icon: classes.alertIcon, message: classes.message }}
          >
            <GameStatus status={gameStatus} xIsNext={xIsNext} />
            <Button
              size="small"
              variant="outlined"
              startIcon={<RestartAltIcon />}
              onClick={resetGame}
            >
              Restart
            </Button>
          </Alert>
        </Box>
        <Box pt={2} pb={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(0)} value={squares[0]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(1)} value={squares[1]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(2)} value={squares[2]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(3)} value={squares[3]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(4)} value={squares[4]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(5)} value={squares[5]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(6)} value={squares[6]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(7)} value={squares[7]} />
            </Grid>
            <Grid item xs={4}>
              <Square onClick={() => handleClick(8)} value={squares[8]} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  let i = 0;
  for (i; i <= 8; i++) {
    if (!squares[i]) break;
  }
  if (i > 8) return "D";
  return null;
}

export default Board;
