const express = require('express');
const router = express.Router();
const User = require('../model/Users')

router.post("/api", async(req,res)=>{
    const user = new User(req.body);
    const user_1 = await user.save();
    res.send(user);
})

router.get('/api', async(req,res)=>{
    const user = await User.find();
    res.send(user);
})

module.exports = router;