import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";
import { sayHello } from '../src/say-hello';
import { Person } from "../src/person";

describe('interface', function(){
    it('should support in ts', function(){

        const seller: Seller = {
            id: 1,
            name: 'John',
            nib: "111111",
            npwp: "2222222"
        };

        console.info(seller);
    });

    it('should support function interface', function(){

        interface AddFunction{
            (value1:number, value2:number): number;
        }

        const add: AddFunction = (value1:number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);
    });

    it('should support indexable interface', function(){
        interface StringArray{
            [index: number]: string;
        }

        const name : StringArray = ["rifqi", "nabil", "akbar"]
        console.info(name);
    });

    it('should support indexable interface for string index', function(){
        interface StringDictionary{
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "rifqi",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("rifqi");
        expect(dictionary["address"]).toBe("Indonesia");
    })

    it('should support extend interface', function(){
        const employee: Employee = {
            id: "1",
            name: "ripkong",
            division: "it"
        }

        console.info(employee);

        const manager: Manager = {
            id: "3",
            name: "kingkong",
            division: "it",
            numberofEmployee: 10,
        };

        console.info(manager);
    });

    it('should support function in interface', function(){
        const person: Person = {
            name: "Eko",
            sayHello(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Gerry"))
    })

    it('should support intersection types', function(){
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasName & HasId;

        const domain: Domain = {
            name: "ripkong",
            id: "1"
        }

        console.info(domain);
    });

    it('should support type assertions', function(){
        const person: any = {
            name: "ripkong",
            age: "25"
        };

        const person2: Person = person as Person;
        console.info(person2)
    });

    it('should support type assertions', function(){
        const person: any = {
            name: "ripkong",
            age: "25"
        };

        const person2: Person = person as Person;
        console.info(person2)
    });
    
    it('should support type assertions', function(){
        const person: any = {
            name: "ripkong",
            age: "25"
        };

        const person2: Person = person as Person;
        console.info(person2)
    });
});