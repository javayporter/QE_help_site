// Import path module
const path = require("path");

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, "db/database.sqlite");

// Create connection to SQLite database
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// Create a table in the database called "qeSiteUsers"
knex.schema
  // Make sure no "qeSiteUsers" table exists
  // before trying to create new
  .hasTable("qeSiteUsers")
  .then((exists) => {
    if (!exists) {
      // If no "qeSiteUsers" table exists
      // create new, with "first_name", "last_name", "email",
      // "password" and "role", "department", "squad_name", "focus_group" columns
      // and use "id" as a primary identification
      // and increment "id" with every new record (user)
      return knex.schema
        .createTable("qeSiteUsers", (table) => {
          table.increments("id").primary();
          table.string("first_name");
          table.string("last_name");
          table.string("email");
          table.string("password");
          table.string("role");
          table.string("department");
          table.string("squad_name");
          table.boolean("focus_group");
        })
        .then(() => {
          // Log success message
          console.log("Table 'qeSiteUsers' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// Just for debugging purposes:
// Log all data in "qeSiteUsers" table
knex
  .select("*")
  .from("qeSiteUsers")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

// Export the database
module.exports = knex;
