import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, makeStyles, Paper, Grid, TextField } from "@material-ui/core";
import "./Calculator.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 2
  },
  addButton: {
    marginTop: 30,
    color: "white",
    height: "56px",
    background: "#1b3757"
  },
  searchButton: {
    height: 56,
    color: "white",
    background: "#1b3757"
  },
  detailsButton: {
    height: `38px`,
    color: "white",
    background: "#1b3757"
  },
  table: {},
  paper: {
    width: "100%",
    marginTop: 40,
    overflowX: "auto"
  }
});

function Calculator(props) {

  const classes = useStyles();

  //   useEffect(() => {props.dispatch({type: 'FETCH_USER'})}, []);

  // Local state to store calculation string
  const [operation, setOperation] = useState({
    values: 5,
  });

  const handleOperationClick = (input) => {
    setOperation({
        values: 7,
    });
  }

  return (
    <div className="calculator-container">
      <div className="operation-container">
        
        {/* <TextField 
        disabled 
        variant="outlined"
        value={`${props.firstOperand}${props.operator}${props.secondOperand}`}
        ></TextField> */}
        {/* <h4>{props.operation.values}</h4> */}
        <Button value="clear" onClick={handleOperationClick}>
          C
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperationClick("7")}>
          7
        </Button>
        <Button onClick={() => handleOperationClick("8")}>
          8
        </Button>
        <Button onClick={() => handleOperationClick("9")}>
          9
        </Button>
        <Button onClick={() => handleOperationClick("*")}>
          *
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperationClick("4")}>
          4
        </Button>
        <Button onClick={() => handleOperationClick("5")}>
          5
        </Button>
        <Button onClick={() => handleOperationClick("6")}>
          6
        </Button>
        <Button value="-"onClick={() => handleOperationClick("-")}>
          -
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperationClick("1")}>
          1
        </Button>
        <Button onClick={() => handleOperationClick("2")}>
          2
        </Button>
        <Button onClick={() => handleOperationClick("3")}>
          3
        </Button>
        <Button onClick={() => handleOperationClick("+")}>
          +
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperationClick("0")}>
          0
        </Button>
        <Button onClick={() => handleOperationClick(".")}>
          .
        </Button>
        <Button onClick={() => handleOperationClick("=")}>
          =
        </Button>
        <Button onClick={() => handleOperationClick("/")}>
          /
        </Button>
      </div>
      <pre>
          {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loginMode: state.loginMode,
    user: state.user
  };
};

export default connect(mapStateToProps)(Calculator);
