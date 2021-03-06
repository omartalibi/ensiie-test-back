const Jetpack = require('./Jetpack');
describe('Jetpack toJson', function () {

    test('Test toJson', () => {
        let jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "X1982BD";
        jetpack.image = "base64...";
        expect(jetpack.toJson()).toMatchObject({
            id: "1",
            name: "X1982BD",
            image: "base64..."
        })
    });

    test('Test object creation', () => {
        let jetpack = new Jetpack();
        expect(jetpack.id).toBe(null);
        expect(jetpack.name).toBe(null);
        expect(jetpack.image).toBe(null);
    });
});