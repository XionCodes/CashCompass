const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

//assigning variable to use express
const app = express();

require("dotenv").config();

//assigning Port from env file
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());