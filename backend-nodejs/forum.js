const express = require('express')
const db = require('./routes/db-config')
const router = express.Router()

//get all pub

router.get('/pub', (req, res) => {
    const users = db.query('SELECT * FROM forumpub', (err, result) => {
        if (err) throw err
        else {

            return res.json({ message: 'data here', data: result })
        }
    })
})


// post pub 

router.post('/pub', (req, res) => {
    let { name, content } = req.body
    db.query(`insert into forumpub ( name , content) values ('${name}' , '${content}')`, (err, result) => {
        if (err) throw err
        if (result.length > 0) return res.json({ message: 'data not  inserted' })
        else {
            res.json({ message: 'data inserted' })
        }
    })
})

//get all rep

router.get('/rep', (req, res) => {
    const users = db.query('SELECT * FROM forumrep', (err, result) => {
        if (err) throw err
        else {

            return res.json({ message: 'data here', data: result })
        }
    })
})


// post all rep  

router.post('/rep', (req, res) => {
    let { idpub, name, rep } = req.body
    db.query(`insert into forumrep ( idpub , name , rep) values ('${idpub}' , '${name}' , '${rep}')`, (err, result) => {
        if (err) throw err
        if (result.length > 0) return res.json({ message: 'data not  inserted' })
        else {
            res.json({ message: 'data inserted' })
        }
    })
})

module.exports = router