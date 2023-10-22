// redis
const redis = require('redis');
const cors = require('cors');
const crypto = require('crypto');
const EXTIME = 2;

const redisClient = redis.createClient({legacyMode: true});
redisClient.connect();

exports.getCrypto = () => {
    return crypto.randomBytes(32).toString('hex');
}

exports.corsExp = cors(
    {
        origin: 'http://localhost:5101',
        credentials: true
    }
);


exports.setCookieInRedis = (req, res, next) => {
    const cook = this.getCrypto();
    redisClient.set(cook, 'nonauth', (err, reply) => {
        if (err) res.status(400).send({message: "erreur set cookie redis"});
    })
    redisClient.expire(cook, parseInt(EXTIME));
    next();
} 