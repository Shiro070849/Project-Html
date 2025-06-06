// การสร้าง object

var person = {
    firstName: "Pilan",
    lastName: "Kasorn",
    eyeColor: "black",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
};

console.log(person.fullName());