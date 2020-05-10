const jwt = require ('jsonwebtoken');

module.exports = {
    createJWTToken(payload){
        return jwt.sign(payload, "putriatiandianindo", { expiresIn : '12h' })
    }
}