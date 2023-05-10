exports.default = function(req, res) {
    res.send("You are on the root route here...");
}

exports.addEmployee = function(req, res) {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end("POST SUCCESS " + empName + " Passphrase " + empPass);
};

exports.aboutUs = (req, res)=>res.send("on route aboutus");

exports.getEmployees = (req, res)=>{res.send("You are on the get docs route")}