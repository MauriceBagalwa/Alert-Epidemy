/*
? import of important packages 
? for our server (app.js)
*/
const express = require("express");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const router = require("./routers");

require("dotenv").config();
// require("./utils/db");
/*
? initialization of our variable
*/
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
/*
? Routers
*/
app.get("/", (req, res) => {
  const message = "Les coronavirus sont des virus...";
  res.send({ message });
});

/*
? #Settings
*/
app.use("/v1/setting/soinsmedicau", router.soinsmedicau_);
app.use("/v1/setting/soinsperso", router.soinsperso_);
app.use("/v1/setting/traitement", router.traitement_);
/*
? #Concern
*/
app.use("/v1/epidemie", router.epidemie_);
app.use("/v1/symptomeFrequent", router.symptomeFreuent_);

/*
? Gestionnaire des Erreurs
? elle nous permet de formater nos Erreurs
*/

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

/*
? Starting the server
*/
app.listen(PORT, () => {
  console.log(`Server is runing on port 🚀 http://localhost:${PORT}`);
});
