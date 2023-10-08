        //This is my first JS code
        console.log('Hello, how you doing?');

       
        let person = {
            name: 'Järvinen',
            age: 31
        };
        console.log(person);

        let interestRate = 0.3;
        interestRate = 1;
        console.log(interestRate);

        function greet(name, lastname){
            console.log('Sup'+name+' '+lastname);
        }

        greet('Järvinen', 'Valto');
        greet('John');

        function square(number){
            return number*number;
        }

        let number = square(1);
        console.log(number);