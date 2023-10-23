exports.index = (req, res) => {
    res.render('../views/index.ejs');
}

exports.secure = (req, res) => {
    req.body.authorized ?
    res.render("../views/secure.ejs") :
    res.render("../views/404.ejs");
}