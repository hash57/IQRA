const logHandler = (req, res, next) => {
    console.log('Request on ' + req.url);
    next();
};
module.exports = logHandler;