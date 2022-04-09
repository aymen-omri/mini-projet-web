const express = require('express')
const db = require('./routes/db-config')
const router = express.Router()

//get all prog

router.get('/prog', (req, res) => {
    const users = db.query('SELECT * FROM prog', (err, result) => {
        if (err) throw err
        else {

            return res.json({ message: 'data here', data: result })
        }
    })
})

//get prog by id 

router.get('/prog/:id', (req, res) => {
    const id = Number(req.params.id)
    db.query('SELECT * FROM prog WHERE id = ?', [id], (err, result) => {
        if (err) throw err
        if (!result[0]) return res.json({ message: "id not found" })
        else {

            return res.json({
                message: "data found",
                data: result
            })
        }
    })
})

// post prog 

router.post('/prog', (req, res) => {
    let { level, name, image, desc, rating, prix } = req.body
    db.query(`insert into prog (level , name , desc , rating , prix) values ('${level}' ,'${name}' , '${image}' ,'${desc}','${rating}' ,'${prix}' )`, (err, result) => {
        if (err) throw err
        if (result.length > 0) return res.json({ message: 'data not  inserted' })
        else {
            res.json({ message: 'data inserted' })
        }
    })
})

//update prog by id

router.put('/prog/:id', (req, res) => {
    const id = Number(req.params.id)

    const { level, name, image, desc, rating, prix } = req.body
    db.query(`update users 
              set  
                 level = '${level}' , 
                 name  = '${name}' ,
                 image = '${image}' , 
                 desc = '${desc}' , 
                 rating = '${rating}' , 
                 prix = '${prix}'


              where 
                 id =  '${id}' `, (error, results) => {
        if (error) throw error
        else {
            return res.json({ message: "data updated" })
        }

    })
})




//delete prog by id 

router.delete('/prog/:id', (req, res) => {
    let id = req.params.id
    db.query(`delete from prog where id = '${id}'`, (error, results) => {
        if (error) throw error

        res.send({
            message: "data deleted"
        })


    })
})

module.exports = router