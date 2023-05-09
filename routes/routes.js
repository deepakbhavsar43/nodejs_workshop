const controller = require('../controllers/controller');
module.exports = function(router){
    // router.get('/', (req, res)=>res.send("Hi, I am learning express.js. Almost finished learning"));
    router.get('/', controller.default);

    // router.post('/addemployee', function(req, res) {
    //     let empName = req.body.empName;
    //     let empPass = req.body.empPass;
    //     res.end("POST SUCCESS " + empName + " Passphrase " + empPass);
    // });
    router.post('/addemployee', controller.addEmployee);

    // router.get('/aboutus', (req, res)=>res.send("on route aboutus"));
    router.get('/aboutus', controller.aboutUs);

    router.get('/getemployee', controller.getEmployees);
}