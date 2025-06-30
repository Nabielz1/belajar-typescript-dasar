describe('object', function(){
    it('should support object type', function() {
        const person: { name: string, age: number, hobbies?: string } = {
            name: "Rifqi",
            age: 20
        }

        console.info(person);

        person.name = "Budi";
        person.age = 21;
        person.hobbies = "Reading";

        console.info(person);
    });
});