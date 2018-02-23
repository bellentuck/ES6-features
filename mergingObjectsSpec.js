describe('Object.assign', function() {

  it('merges contents onto the first argument it takes in (all args must be objs - object literals?)', function() {
    const obj1 = {foo: 1};
    const obj2 = {bar: 2};
    const obj3 = {baz: 3};

    const newObj = Object.assign({}, obj1, obj2, obj3);
    expect(newObj).toEqual(jasmine.objectContaining({
      foo: 1, bar: 2, baz: 3
    }));

    Object.assign(obj1, obj2, obj3);
    expect(obj1).toEqual(jasmine.objectContaining({
      foo: 1, bar: 2, baz: 3
    }));

  });

});
