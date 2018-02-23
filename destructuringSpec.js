describe('Destructuring Assignment', function() {


  describe('for arrays', function() {

    it('takes an array and assigns values to vars present on the left-hand side of the assignment, yielding the same result as if definitions had been individually made', function() {
      const arr = [1, 2];
      const x = arr[0];
      const y = arr[1];
      const [a,b] = arr;
      expect(a).toEqual(x);
      expect(b).toEqual(y);
    });

    it('can swap two values without intermediary variables', function() {
      function swap (a, b) {
        const temp = b;
        b = a;
        a = temp;
        return [a, b];
      }
      function destructuredSwap (a, b) {
        [b, a] = [a, b];
        return [a, b];
      }
      expect(String(destructuredSwap('a', 'b'))).toEqual(String(swap('a', 'b')));
      let [a, b] = destructuredSwap('a', 'b');
      expect(a).toEqual(swap('a', 'b')[0]);
      expect(b).toEqual(swap('a', 'b')[1]);
    });

    it('can be used as a technique to write functions that effectively return more than one value', function() {
      function performOperations (a, b) {
        const sum = a + b;
        const diff = a - b;
        const prod = a * b;
        const quot = a / b;
        return [sum, diff, prod, quot];
      }
      const [w, x, y, z] = performOperations(10, 5);
      expect(w).toEqual(15);
      expect(x).toEqual(5);
      expect(y).toEqual(50);
      expect(z).toEqual(2);
    });

    it('can be used to assign values from an array (favoriteDogs example)', function() {
      let favoriteDogs = ["cody", "cooper", "ben", "bubba"];
      let [cody, cooper, ben, bubba] = favoriteDogs;
      expect(cody).toEqual(favoriteDogs[0]);
      expect(cody).toEqual("cody");
    });
  });

  describe('for objects', function() {
    const obj = { x: 1, y: 2 };
    it('assigns variables to values in an object if they are keys in that object', function() {
      const { x, y } = obj;
      expect(x).toEqual(obj.x);
      expect(x).toEqual(1);
      expect(y).toEqual(obj.y);
      expect(y).toEqual(2);
    });
    it('assigns variables the value undefined if they are not keys in the object', function() {
      const { z } = obj;
      expect(z).toBeUndefined();
    });
  });

  describe('for functions', function() {
    it('allows for use of destructuring syntax in the function definition', function() {
      const config = {
        user: "Malcolm Reynolds",
        difficultyLevel: 'medium',
        lastSavePoint: 'Thu Dec 22 2016 11:56:03 GMT-0500 (EST)'
      }
      function configure (configObj) {
        const user = configObj.user;
        const difficultyLevel = configObj.difficultyLevel;
        const lastSavePoint = configObj.lastSavePoint;
        // configure stuff using the info we passed in
        return { user, difficultyLevel, lastSavePoint }
      }
      function destructuredConfigure ({ user, difficultyLevel, lastSavePoint }) {
        return { user, difficultyLevel, lastSavePoint }
      }
      const c0 = configure(config);
      const c1 = destructuredConfigure(config);
      expect(c1.user).toEqual(c0.user);
      expect(c1.user).toEqual(config.user);
      expect(c1.difficultyLevel).toEqual(c0.difficultyLevel);
      expect(c1.difficultyLevel).toEqual(config.difficultyLevel);
    });
  });
});
