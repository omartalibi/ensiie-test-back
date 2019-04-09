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
});