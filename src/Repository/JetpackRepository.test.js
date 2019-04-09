const Jetpack = require('../Entity/Jetpack');

const Repository = require('./JetpackRepository');

describe('Get All', function () {

    test('Test getAll', () => {
        let dbMock = {
            get:jest.fn(),
            size:jest.fn(),
            value:jest.fn()
        };

        const jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "jetpack";
        jetpack.image = "123"

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue([
            jetpack
        ]);

        const repository = new Repository(dbMock);
        jetpacks = repository.getAll()
        expect(jetpacks.length).toBe(1);
        
        expect(jetpacks[0].name).toBe("jetpack");    
    });

    test('Test create', () => {
        let dbMock = {
            get:jest.fn(),
            push:jest.fn(),
            write:jest.fn()
        };

        const jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "jetpack";
        jetpack.image = "123"

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);
        dbMock.write.mockReturnValue([
            jetpack
        ]);

        const repository = new Repository(dbMock);
        var res = repository.create(jetpack);
        expect(dbMock.write).toHaveBeenCalled();
    });

    test('Test getAvailabilities', () => {
        let dbMock = {
            get:jest.fn(),
            size:jest.fn(),
            value:jest.fn()
        };

        const expected = {
            jetpack_id:"1",
            start_date:"2019-04-09T08:37:38.579Z",
            end_date:"2019-04-09T08:37:38.579Z"
        }

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue([
            expected
        ]);

        const repository = new Repository(dbMock);
        availabilities = repository.getAvailabilities()
        expect(availabilities.length).toBe(1);
        
        expect(availabilities[0].jetpack_id).toBe("1");      
    });

    test('Test create(undefined) throws, false id throws, false name throws', () => {
        let dbMock = {
            get:jest.fn(),
            push:jest.fn(),
            write:jest.fn()
        };

        const jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "jetpack";
        jetpack.image = "123"

        
        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);
        dbMock.write.mockReturnValue([
            jetpack
        ]);

        const repository = new Repository(dbMock);

        expect(() => {repository.create(null)}).toThrow();
        
        const noname = new Jetpack();
        noname.name = undefined;
        noname.image = "123";
        noname.id = "4";

        expect(() => {repository.create(noname)}).toThrow();

        const noid = new Jetpack();
        jetpack.name = "jetpack";
        jetpack.image = "123";
        jetpack.id = undefined;

        expect(() => {repository.create(noid)}).toThrow();

        const empty = new Jetpack();
        jetpack.name = undefined;
        jetpack.id = undefined;
        expect(() => {repository.create(empty)}).toThrow();
    });

    test('Test getAvailabilities', () => {
        let dbMock = {
            get:jest.fn(),
            size:jest.fn(),
            value:jest.fn()
        };

        const expected = {
            jetpack_id:"1",
            start_date:"2019-04-09T08:37:38.579Z",
            end_date:"2019-04-09T08:37:38.579Z"
        }

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue([
            expected
        ]);

        const repository = new Repository(dbMock);
        availabilities = repository.getAvailabilities()
        expect(availabilities.length).toBe(1);
        
        expect(availabilities[0].jetpack_id).toBe("1");

      
    });
});