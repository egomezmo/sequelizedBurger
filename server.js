var express = require("express");                                     // dependencia a express
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));                                    // Serve static content for the app from the "public" directory in the application directory.
app.use(express.urlencoded({ extended: true }));                      // Parse application body as JSON
app.use(express.json());
var exphbs = require("express-handlebars");                           // Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");            // Import routes and give the server access to them.
app.use(routes);

app.listen(PORT, function() {                   // Start our server so that it can begin listening to client requests.
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});