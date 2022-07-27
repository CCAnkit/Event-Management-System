const express = require("express");
const router = express.Router();

const { createUser, 
        login,
        logout,
        getUserDetails,
        changePassword,
        forgotPassword,
        resetPassword
} = require("../controllers/userController.js");

const { createEvent,
        inviteUser,
        getEventsByFilter,
        getEventById,
        updateEvent,
} = require("../controllers/eventController.js");

const { auth } = require("../middlewares/auth.js");


// User API's
router.post('/user/register', createUser);

router.post('/user/login', login);

router.get('/user/logout', logout);

router.get('/user/getDetails', getUserDetails);

router.patch('/user/changePassword/:userId', auth, changePassword);

router.put('/user/forgotPassword', forgotPassword);

router.post('/user/resetPassword', resetPassword);


// Event API's
router.post('/event/new', auth, createEvent)          // Create New Event

router.post('/event/invite/:userId/:eventId', auth, inviteUser)        // Intite User

router.get('/event/getList', auth, getEventsByFilter)      // Get the list of the Events by filter

router.get('/event/fetch/:eventId', /*auth,*/ getEventById)     // Get Event by Event ID

router.put('/event/update/:userId/:eventId', auth, updateEvent)     // Update Event by ID


module.exports = router;