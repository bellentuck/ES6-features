function foo2 (bar, baz) {
  bar = bar || 1;
  baz = baz || [];
  for (let i = 0; i < bar; i++) baz.push(i);
  return baz;
}

function defaultParamFoo2(bar = 1, baz = []) {
  for (let i = 0; i < bar; i++) baz.push(i);
  return baz;
}

describe('Default Params', function() {

  describe('the default param function foo2', function() {
    it('is equivalent to the pre-ES6 or-short-circuit-defined pattern version given user-defined params', function() {
      expect(String(foo2(3,[2,1]))).toEqual(String(defaultParamFoo2(3,[2,1])));
    });

    it('is equivalent to the pre-ES6 or-short-circuit-defined pattern version not given user-defined params', function() {
      expect(String(foo2())).toEqual(String(defaultParamFoo2()));
    });

    it('enables passing in falsy params that are not to be replaced by defaults, unlike the pre-ES6 or-short-circuit-defined pattern version', function() {
      expect(String(foo2(0))).not.toEqual(String(defaultParamFoo2(0)));
    });

  });
});
