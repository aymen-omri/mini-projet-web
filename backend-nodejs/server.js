const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const cors = require('cors')
const router = express.Router()

const db = require('./routes/db-config')
const app = express()
const cookie = require('cookie-parser')
const PORT = process.env.PORT || 5000;
//app.use('/js', express.static(__dirname + '/public/js'))
//app.use('/css', express.static(__dirname + '/public/css'))
//app.set('view engine', 'ejs')
//app.set('views', './views')
app.use((cors()))
app.use(cookie())
app.use(express.json())
db.connect(err => {
    if (err) throw (err)
    console.log('database connected')

})

const crud = require('./usercruds')

app.use(crud)

const forum = require('./forum')

app.use(forum)



const { loggedin } = require('./controllers/loggedin')




app.post('/login', async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ status: "error", error: "please enter your email and password" })
    else {
        db.query('SELECT * FROM users WHERE email = ?', [email], async(Err, result) => {
            if (Err) throw Err
            if (!result[0] || !await bcrypt.compare(password, result[0].password)) return res.json({ status: "error", error: "incorrect email or password" })
            else {
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES

                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true,


                }
                res.cookie("userRegistered", token, cookieOptions)
                console.log('yes')

                return res.json({ status: "success", success: "user has been logged in ", data: result })
            }
        })
    }

})



app.post('/register', async(req, res) => {
    const { nom, email, password: Npassword } = req.body
    if (!nom || !email || !Npassword) return res.json({ status: "error", error: "please enter your email aand password" })
    else {

        db.query('SELECT email FROM users WHERE email = ?', [email], async(err, result) => {
            if (err) throw err
            if (result[0]) return res.json({ status: "error", error: "change please" })
            else {
                const password = await bcrypt.hash(Npassword, 8)
                console.log(password)
                db.query(`insert into users (name , email , password) values ('${nom}','${email}' ,'${password}')`, (error, results) => {
                    if (error) throw error
                    return res.json({ status: "success", success: "user registred" })

                })
            }


        })
    }
})

app.get('/logout', (req, res) => {
    res.cookie('userRegistered', '', { maxAge: 1 })
    res.redirect('/')

})




//app.use('/', require('./routes/pages'))
//app.use('/api', require('./controllers/auth')
app.listen(PORT)