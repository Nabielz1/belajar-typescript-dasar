describe('Function', function(){
    it('should support in ts', function(){
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Rifqi")).toBe("Hello Rifqi");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Rifqi");
    });

    it('should support default value', function(){
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Rifqi")).toBe("Hello Rifqi");
    });

    it('should support rest parameter', function(){
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values){
                total += value;
            }

            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    });

    it('should support optional parameter', function(){
        function sayHello(firstName: string, lastName?: string): string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Rifqi")).toBe("Hello Rifqi");
        expect(sayHello("Rifqi", "Nabil")).toBe("Hello Rifqi Nabil");
    });

    it('should support function overloading', function(){
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value === "string"){
                return value.toUpperCase();
            } else if(typeof value === "number"){
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Hello")).toBe("HELLO");
    });

    it('should function as parameter', function(){
        function sayHello(name: string, filter : (name: string) => string): string {
            return `hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Rifqi", toUpper)).toBe("hello RIFQI");
        
        expect(sayHello("Rifqi", (name: string): string => name.toUpperCase())).toBe("Hello RIFQI");
    });
});