describe('if statement', function(){
    it('should support in ts', function(){
        const examValue = 61;

        if(examValue > 80){
            console.info("Good");
        } else if (examValue > 60){
            console.info("Not bad");
        } else {
            console.info("Bad");
        }
    });

    it('should support ternary operator', function(){
        const value = 80;
        const result = value >= 75 ? "Congratulation" : "Try Again";
        console.info(result);
    });

    it('should switch statement', function(){
        function sayHello(name: string): string {
            switch (name) {
                case "John":
                    return "Hello, John";
                case "Jane":
                    return "Hello, Jane";
                default :
                    return "Hello, ";
            }
        }

        console.info(sayHello("John"));
        console.info(sayHello("Jane"));
        console.info(sayHello("Joko"))
    });
});