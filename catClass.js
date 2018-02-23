// Write a Cat class! Your cat should have a name and a color. It should support two methods: "purr" and "sayName". When "purr" is invoked, it should log the string "Meow!" to the console, and when "sayName" is invoked, it should log the cat's name to the console.

const allCats = [];

class Cat {

  constructor (name, color) {
    this.name = name;
    this.color = color;
    allCats.push(this);
  }

  purr() {
    return 'Meow!';
  }

  sayName() {
    return this.name;
  }

  static fetchAllCats() {
    return allCats;
  }

  static fetchCatByName(cat) {
    for (let i = 0; i < allCats.length; i++) {
      if (allCats[i].name === cat) return allCats[i];
    }
    throw 'Cat not found';
  }

}
