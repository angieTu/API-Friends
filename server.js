const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = process.env.PORT || 8080;

dotenv.config({ path: "./config.env" });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.wky5n.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then((con) => console.log("Conectado"));

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
