describe('Class Syntax', function() {
  describe('cat class', function() {

    var cat = new Cat('Miles', 'orangey');

    it('has a name and a color', function() {
      expect(cat.name).toEqual('Miles');
      expect(cat.color).toEqual('orangey');
    });

    it('should support the purr method', function() {
      expect(cat.purr()).toEqual('Meow!');
    });

    it('should support the sayName method', function() {
      expect(cat.sayName()).toEqual('Miles');
    });

    describe('static method fetchAllCats', function() {
      it('should give an array of all cats that have been created', function() {
        var cat2 = new Cat('Evgny', 'douth');
        expect(Cat.fetchAllCats().length).toEqual(2);
        expect(Cat.fetchAllCats()[0].name).toEqual('Miles');
        expect(Cat.fetchAllCats()[1].color).toEqual('douth');
      });
      // it('should not be callable from a particular instance of Cat', function() {

      // });
    });

    describe('static method fetchCatByName', function() {
      it('should return the cat with the matching name if one has been created', function() {
        expect(Cat.fetchCatByName('Miles').color).toEqual('orangey');
      });

      it('should throw an error with the message "Cat not found" if no cat has been created with that name', function() {
        expect(Cat.fetchCatByName).toThrow('Cat not found');
      });
    });

  });
});
