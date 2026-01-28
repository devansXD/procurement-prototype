

const router = require('express').Router()


// Set version for all templates in this folder
router.use((req, res, next) => {
  res.locals.prototypeVersion = 'v1'
  next()
})

// Define your v2 routes here (no nested require)
router.get('/dashboard', (req, res) => {
  res.render('v1/dashboard')
})

// Add other routes as needed...



module.exports = router