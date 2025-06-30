describe('Array', function() {
    it('should same with javaScript array', function() {
        const names: string[] = ["Rifqi", "Budi", "Siti"];
        const ages: number[] = [20, 21, 22];
        const isStudents: boolean[] = [true, false, true];

        console.info(names);
        console.info(ages);
        console.info(isStudents);
    });

    it('should support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ["Reading", "Gaming", "Cooking"];

        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });

    it('should support tuple', function() {
        const person: readonly [string, number, boolean] = ["Rifqi", 20, true];
        const person2: [string, number, boolean] = ["Budi", 21, false];

        console.info(person);
        console.info(person2);
    })

});