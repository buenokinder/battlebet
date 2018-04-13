app.post('/someFunction', function (req, res) {
    Parse.Cloud.run('someFunction', req.body).then(
    function () {
    console.log('Cloud Code Function called');
    return res.send(200);
    },
    function (error) {
    console.log("CLoud Code Function Called Fail");
    return res.status(400).send(error.message);
    });
   });