const express = require("express");
const app = express();
const cors = require("cors");

const charactersRouter = require("./routes/charactersRoutes");
const seasonsRouter = require("./routes/seasonsRoutes");
const episodesRouter = require("./routes/episodesRoutes");
const infoRouter = require("./routes/infoRoutes");
const reviewsRouter = require("./routes/reviewsRoutes");

app.use(express.json());
app.use(cors());

app.use("/characters", charactersRouter);
app.use("/seasons", seasonsRouter);
app.use("/episodes", episodesRouter);
app.use("/info", infoRouter);
app.use("/reviews", reviewsRouter);

module.exports = app;
