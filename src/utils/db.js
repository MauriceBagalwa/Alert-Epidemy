const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin_epi:admin243@cluster0.jdyxr.mongodb.net/epidemie_db?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log("DB Connection Error: " + err);
  });
