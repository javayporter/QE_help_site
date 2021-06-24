// Import express
const express = require("express");

// Import users-controller
const qeusersRoutes = require("../controllers/users-controller");

// Create router
const router = express.Router();

// Add route for GET request to retrieve all users
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
router.get("/all", qeusersRoutes.qeusersAll);

// Add route for POST request to create a new user
// In server.js, users route is specified as '/users'
// this means that '/create' translates to '/users/create'
router.post("/create", qeusersRoutes.qeusersCreate);

// Add route for PUT request to delete specific user
// In server.js, users route is specified as '/users'
// this means that '/delete' translates to 'users/delete'
router.put("/delete", qeusersRoutes.qeusersDelete);

// Add route for PUT request to reset user list
// In server.js, users route is specified as '/users'
// this means that '/reset' translates to '/users/reset'
router.put("/reset", qeusersRoutes.qeusersReset);

// Export router
module.exports = router;
