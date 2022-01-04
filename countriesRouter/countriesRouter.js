const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const countries = require('../')

router.get('/about', (req, res) => {
    res.send('countries page')
})

router.get('/:id', (req, res) => {
    res.send('country' + req.params.id)
})

router.get('/about', (req, res) => {
    res.render('about', {
      locals: {
        title: 'AmazingSite.com » About',
        countries: countries
      },
      partials: partials
    })
})
module.exports = router
