const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');


module.exports = (req, res) => {
    //const repository = new JetpackRepository(db);
    //const availabilities = repository.getAvailabilities();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send("Not yet implemented!");
};