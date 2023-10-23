// redis
const redis = require('redis');
const cors = require('cors');
const crypto = require('crypto');
const EXTIME = 180;  // seconds

const redisClient = redis.createClient({legacyMode: true});
redisClient.connect();

exports.getCrypto = () => {
    return crypto.randomBytes(32).toString('hex');
}


exports.corsExp = cors({
    origin: 'http://localhost:5101',
    credentials: true
});


exports.setCookieInRedis = (req, res, next) => {
    const cook = this.getCrypto();
    req.body['cookieValue'] = cook;
    redisClient.set(cook, 'nonauth', (err, reply) => {
        if (err) {
            res.status(400).send({erreur: "erreur set cookie redis"});
            return;
        }
    })
    redisClient.expire(cook, parseInt(EXTIME));
    next();
};


exports.checkCookie = (req, res, next) => {
    const cookie = req.cookies.expresssession;
    req.body.authorized = cookie === undefined ? false : true;
    next();
}


exports.sendCookie = (req, res, next) => {
    res.cookie("expresssession", req.body.cookieValue, {maxAge: EXTIME * 1000});
    res.status(200).send({message: 'ok'});
}


exports.clearCookie = (req, res, next) => {
    res.clearCookie('expresssession');
    next();
}