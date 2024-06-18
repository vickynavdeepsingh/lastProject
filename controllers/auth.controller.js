const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcript = require('bcrypt');
const mongoDb=require('../config/db.mongo')
const db = require('../config/db.config');



router.post('/resister', async (req, res) => {
    const { userName, password } = req.body;
    //console.log(userName,password)
    if (!userName || !password) {
        return res.status(400).json({ msg: "usename and password are required" })
    }
    try {
        const hashedpassword = await bcript.hash(password, 10);
        const query = 'INSERT INTO users (userName,password) values (?,?)';
        db.query(query, [userName, hashedpassword], (error, result) => {
            if (error) {
                return res.status(500).send({ msg: "Error Resistering user", error: error });
            }
             res.status(201).send({ msg: "User resister successfully!" })
        })
    } catch (error) {

         res.status(500).send({ msg: "server error", error })
    }
})

//Login user

router.post('/login', (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ msg: "username and password required" });
    }
    const query = "SELECT * FROM users WHERW userName=?"

})


module.exports = router;