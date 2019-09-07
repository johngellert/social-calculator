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
    firstOperand: "",
    secondOperand: "",
    operator: "",
  });

  const handleOperandClick = input => {
    if (operation.operator === "" && operation.secondOperand === "") {
      if (input === "." && operation.firstOperand.includes(".") === false) {
        setOperation({
          ...operation,
          firstOperand: operation.firstOperand + input
        });
      } else if (input === ".") {
        setOperation({
          ...operation,
          firstOperand: operation.firstOperand
        });
      } else {
        setOperation({
          ...operation,
          firstOperand: operation.firstOperand + input
        });
      }
    } else {
      if (input === "." && operation.secondOperand.includes(".") === false) {
        setOperation({
          ...operation,
          secondOperand: operation.secondOperand + input
        });
      } else if (input === ".") {
        setOperation({
          ...operation,
          secondOperand: operation.secondOperand
        });
      } else {
        setOperation({
          ...operation,
          secondOperand: operation.secondOperand + input
        });
      }
    }
  };

  const handleOperatorClick = input => {
    if (operation.secondOperand === "") {
      setOperation({
        ...operation,
        operator: input
      });
    }
  };

  const handleEqualClick = () => {
    props.dispatch({
      type: "POST_OPERATION",
      payload: { ...operation, ...props.user }
    });
    setOperation({
        firstOperand: "",
        secondOperand: "",
        operator: "",
      });
  };

  return (
    <div className="calculator-container">
      <div className="operation-container">
        {/* <TextField 
        disabled 
        variant="outlined"
        value={`${props.firstOperand}${props.operator}${props.secondOperand}`}
        ></TextField> */}
        <h4>
          {operation.firstOperand} {operation.operator}{" "}
          {operation.secondOperand}
        </h4>
        <Button value="clear" onClick={handleOperandClick}>
          C
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperandClick("7")}>7</Button>
        <Button onClick={() => handleOperandClick("8")}>8</Button>
        <Button onClick={() => handleOperandClick("9")}>9</Button>
        <Button onClick={() => handleOperatorClick("*")}>*</Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperandClick("4")}>4</Button>
        <Button onClick={() => handleOperandClick("5")}>5</Button>
        <Button onClick={() => handleOperandClick("6")}>6</Button>
        <Button value="-" onClick={() => handleOperatorClick("-")}>
          -
        </Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperandClick("1")}>1</Button>
        <Button onClick={() => handleOperandClick("2")}>2</Button>
        <Button onClick={() => handleOperandClick("3")}>3</Button>
        <Button onClick={() => handleOperatorClick("+")}>+</Button>
      </div>
      <div className="calc-row">
        <Button onClick={() => handleOperandClick("0")}>0</Button>
        <Button onClick={() => handleOperandClick(".")}>.</Button>
        <Button onClick={handleEqualClick}>=</Button>
        <Button onClick={() => handleOperatorClick("/")}>/</Button>
      </div>
      <pre>{JSON.stringify(operation, null, 2)}</pre>
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
