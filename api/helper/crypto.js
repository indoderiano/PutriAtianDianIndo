const crypto=require('crypto')

module.exports=(password)=>{
    return crypto.createHmac('sha256','putriatiandianindo').update(password).digest('hex')
}