const Jetpack = require("../../src/Entity/Jetpack");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');


module.exports = (req, res) => {
    const repository = new JetpackRepository(db);
    //const jetpacks = repository.getAll().map(jetpacks => jetpacks.toJson());
    const jetpacks = repository.getAll();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(jetpacks);
};