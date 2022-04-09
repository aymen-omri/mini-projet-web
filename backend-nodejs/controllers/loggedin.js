const db = require('../routes/db-config')
const jwt = require('jsonwebtoken')
const loggedin = (req, res, next) => {
    if (!req.cookies.userRegistered) return res.json({ statut: 'not logged in' })
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET)
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) => {
            if (err) return next()
            req.user = result[0]
            return next()
        })

    } catch (err) {
        if (err) return res.status(400).json({ error: err })

    }


}
module.exports = { loggedin }