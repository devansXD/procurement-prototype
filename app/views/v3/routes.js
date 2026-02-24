const router = require('express').Router()

// Set version for all templates in this folder
router.use((req, res, next) => {
  res.locals.prototypeVersion = 'v3'
  next()
})

// Add any version-specific routes here

module.exports = router