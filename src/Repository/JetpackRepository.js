module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(jetpack) {
        if (!jetpack) {
            throw 'Jetpack object is undefined';
        }

        if (!jetpack.id || !jetpack.name) {
            throw 'Jetpack object is missing information';
        }

        this.db
            .get('jetpacks')
            .push(jetpack.toJson())
            .write()
    }

    getAll() {
        return this.db.get('jetpacks').value();
    }

    getAvailabilities() {
        return this.db.get('availabilities').value();
    }
	
	getAvailability(id){
        if(!id)
            throw 'Jetpack id is missing';

        let list = this.getAvailabilities();

        for(var i=0;i<list.length;i++)
        {
            if (list[i]["jetpack_id"] == id)
                return i;
        }
    }

    deleteAvailability(id){
        if(!id)
            throw 'Jetpack id is missing';

        var key = this.getAvailability(id);
        this.getAvailabilities().splice(key, 1)
        return this.getAvailabilities();
    }
};