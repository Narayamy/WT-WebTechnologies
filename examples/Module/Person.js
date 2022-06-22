var Person = {
  firstName: "John",
  lastName : "Doe",
  id     : 1,
  fullName : function() {
    return this.firstName + " " 
		+ this.lastName;
  }
};
module.exports = Person;

