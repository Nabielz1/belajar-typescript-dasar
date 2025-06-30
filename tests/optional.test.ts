describe('Optional Parameter', function(){
    it('should be able to pass optional parameter', function(){

        function sayHello(name? : string | null){
            if(name){
                console.info(`Hello ${name}`);
            } else {
                console.info('Hello');
            }
        }

        sayHello("Rifqi");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);

    });
});