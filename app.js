const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app
    .route('/jetpacks/:id?')
    .get(require('./controller/Jetpack/GetJetpackController'))
    .post(require('./controller/Jetpack/CreateJetpackController'))
    //.delete(require('./controller/Jetpack/DeleteJetpackController'))

app
    .route('/availabilities/:id?')
    .get(require('./controller/Availabilities/GetAvailabilitiesController'))
    .put(require('./controller/Availabilities/PutAvailabilitiesController'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

