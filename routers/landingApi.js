const express = require('express')
const router = express.Router();

const landingSchema = require('../models/landingPage.js')
console.log("landing")
router.post('/', async (req, res) => {
  
   var landing= await landingSchema.create( req.body)
   res.send(landing)
    
});
router.get('/', async (req, res) => {
  
    var landings= await landingSchema.find()
    res.send(landings)
     
 });
router.get('/:id', async (req, res) => {
  
    var landing= await landingSchema.findById(req.params.id)
    res.send(landing)
     
 });
 module.exports = router;