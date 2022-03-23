console.log(" >>>>>>>>>>>>>> Inside Database file ");

const mongoose = require("mongoose");
// // mongoose.connect("mongodb://localhost:27017");
// mongoose.connect("mongodb://sample_mongo:27017");

// var db = mongoose.connection;
// db.on("open", function () {
//   console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ");
//   console.log(" ########### Connected to mongo server. ####################");
//   console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ");
// });

// db.on("error", function (err) {
//   console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ");
//   console.log(
//     " ############## Could not connect to mongo server! #################"
//   );
//   console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ");
//   return console.log(err);
// });

(async () => {
  try {
    const options = {
      useNewUrlParser: true,
    };

    console.log(" ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ block 2");
    const connection = await mongoose.connect(
      "mongodb://sample_mongo:27017",
      options
    );

    if (connection) {
      console.log("Database Connected Successfully...");
    }
  } catch (err) {
    console.log("Error while connecting database\n");
    console.log(err);
  }
})();
