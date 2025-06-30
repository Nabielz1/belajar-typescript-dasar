describe('union', function() {
    it('should support union type', function() {
        let value: string | number | boolean = "Rifqi";
        console.info(value);

        value = 20;
        console.info(value);

        value = true;
        console.info(value);
    });

    it('should support union type with array', function() {
        let values: (string | number | boolean)[] = ["Rifqi", 20, true];
        console.info(values);
    });

    it('should support typeof operator', function() {

        function process(value: string | number | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 10;
            } else {
                return !value;
            }   
        }

        expect(process("Rifqi")).toBe("RIFQI");
        expect(process(20)).toBe(30);
        expect(process(true)).toBe(false);

    });
});