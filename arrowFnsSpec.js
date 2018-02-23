describe('Arrow Functions', function() {


  function foo () {
    return 10;
  }

  function baz (x, y) {
    return x - y;
  }

  function bar (z) {
    if (z > 10) return 'quux';
    else return 'xyzzx';
  }

  const arrowFoo = () => 10;
  const arrowBaz = (x, y) => x - y;
  const arrowBar = z => z > 10 ? 'quux' : 'xyzzx';

  describe('the arrow function foo', function() {
    it('is equivalent to its non-arrow version', function() {
      expect(arrowFoo()).toEqual(foo());
    });
  });

  describe('the arrow function baz', function() {
    it('is equivalent to its non-arrow version', function() {
      let x = 1, y = 2;
      expect(arrowBaz(x,y)).toEqual(baz(x,y));
    });
  });

  describe('the arrow function bar', function() {
    it('is equivalent to its non-arrow version', function() {
      let z = 10;
      expect(arrowBar(z)).toEqual(bar(z));
    });
  });

});




