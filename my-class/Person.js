(function() {

  var Person = my.Class({

    STATIC: {
      AGE_OF_MAJORITY: 18
    },

    constructor: function(name, age) {
      this.name = name;
      this.age = age;
    },

    sayHello: function() {
      console.log('Hello from ' + this.name + '!');
    },

    drinkAlcohol: function() {
      this.age < Person.AGE_OF_MAJORITY ?
        console.log('Too young! Drink milk instead!') :
        console.log('Whiskey or beer?');
    }

  });

  myLib.Person = Person;

})();