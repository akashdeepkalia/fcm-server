const express = require("express")
const { sendNotification, broadcastNotification, registerToken } = require("../controllers/notifications")

const router = express.Router()

router.post('/send', sendNotification)
router.post('/broadcast', broadcastNotification)
router.post('/register', registerToken)

module.exports = router;