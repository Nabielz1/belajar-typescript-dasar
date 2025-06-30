import { sayHello } from "../src/say-hello";

describe('sayHello', function() {
    it("should return a greeting message", function() {
        expect(sayHello("Rifqi")).toBe("Hello Rifqi");
    });
});