//Creating a contactbook

class Contact{
    constructor(first, last, num){
        this.firstname = first;
        this.lastname = last;
        this.mobile = num;
    }

    display(){
        console.log(`Name: ${this.firstname} ${this.lastname}\nMobile: ${this.mobile}`);
    }
}

class JobProfile extends Contact{
    constructor(first, last, num, job = "Unemployed"){
        super(first, last, num);
        this.job = job;
    }
    occupation(){
        if(this.job == 'Unemployed'){
            console.log(`${this.firstname} is ${this.job}`);
        }
        else{
            var letter = this.job.charAt(0);
            let vowels = ["A", "E", "I", "O", "U"];
            if(vowels.includes(letter)){
                console.log(`${this.firstname} works as an ${this.job}`);
            }
            else{
                console.log(`${this.firstname} works as a ${this.job}`);
            }
        }
        
    }
}


person = new Contact('Finley', 'Campbell', '02108112939');
person.display();

employee = new JobProfile('Bob', 'Jones', '0215678456', 'Electrician');
employee.occupation();

employee1 = new JobProfile('Sally', 'Patel', '0218907890');
employee1.occupation();

employee2 = new JobProfile('Greg', 'Porter', '0224561234', "Programmer");
employee2.occupation();

employee2.display();

var test = null;