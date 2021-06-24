// Import database
const knex = require("./../db");

// Retrieve all books
exports.qeusersAll = async (req, res) => {
  // Get all users from database
  knex
    .select("*") // select all records
    .from("qeSiteUsers") // from 'qeSiteUsers' table
    .then((userData) => {
      // Send qe site users extracted from database in response
      res.json(userData);
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error retrieving qe site users: ${err}`,
      });
    });
};

// Create new qe user
exports.qeusersCreate = async (req, res) => {
  // Add new qe site user to database
  knex("qeSiteUsers")
    .insert({
      // insert new record, a qe site user
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      department: req.body.department,
      squad_name: req.body.squad_name,
      focus_group: req.body.focus_group,
    })
    .then(() => {
      // Send a success message in response
      res.json({
        message: `User ${req.body.first_name} ${req.body.last_name} created.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error creating ${req.body.first_name} ${req.body.last_name} as a qe site user: ${err}`,
      });
    });
};

// Remove specific user
exports.qeusersDelete = async (req, res) => {
  // Find specific user in the database and remove it
  knex("qeSiteUsers")
    .where("id", req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({
        message: `User ${req.body.id} ${req.body.first_name} ${req.body.last_name} deleted.`,
      });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({
        message: `There was an error deleting ${req.body.id} ${req.body.first_name} ${req.body.last_name} user: ${err}`,
      });
    });
};

// Remove all users on the list
exports.qeusersReset = async (req, res) => {
  // Remove all users from database
  knex
    .select("*") // select all records
    .from("qeSiteUsers") // from 'qeSiteUsers' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: "User list cleared." });
    })
    .catch((err) => {
      // Send a error message in response
      res.json({ message: `There was an error resetting user list: ${err}.` });
    });
};
