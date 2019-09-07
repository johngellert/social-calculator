const express = require("express");
const {
  rejectUnauthenticated
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

router.post("/", rejectUnauthenticated, (req, res, next) => {
  const { firstOperand, secondOperand, operator, id, username } = req.body;
  let answer;
  switch (operator) {
    case "+":
      answer = Number(firstOperand) + Number(secondOperand);
      break;
    case "-":
      answer = Number(firstOperand) - Number(secondOperand);
      break;
    case "/":
      answer = Number(firstOperand) / Number(secondOperand);
      break;
    case "*":
      answer = Number(firstOperand) * Number(secondOperand);
      break;
  }

  const operation = `${firstOperand} ${operator} ${secondOperand} = ${answer}`
  console.log(answer);
  console.log(operation);
  const queryText = `INSERT INTO "operations" (user_id, username, operation) VALUES ($1, $2, $3) RETURNING id`;

    pool.query(queryText, [id, username, operation]).then(() => {
        res.sendStatus(201);
    }
    ).catch(error => {
        console.log('Error with INSERT operation query:', error);
    })
});

module.exports = router;
