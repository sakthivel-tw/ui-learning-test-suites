describe("use strict, let & const", () => {
  test("throw errors when using use strict", () => {
    // ======================================================= //
    // Hint: Don't allow foo to declare global variables

    expect(() => {
      "use strict";
      function foo() {
        x = 1;
        return "ok";
      }
      foo();
    }).toThrow(new ReferenceError("x is not defined"));

    // ======================================================= //

    function foo() {
      y = 4;
    }
    foo();
    expect(y).toBe(4);

    // ======================================================= //

    var user = {
      name: "foo",
      profession: "dev",
    };
    delete user.name;
    expect(user).toEqual({
      profession: "dev",
    });
  });

  test("var, let & const", () => {
    // ======================================================= //

    function foo() {
      var x = 1;
      return x;
    }
    expect(foo()).toEqual(1);

    // ======================================================= //

    function bar() {
      if (true) {
        var y = 3;
      }
      return y;
    }
    expect(bar()).toEqual(3);

    // ======================================================= //
    // Make the below function throw an exception

    expect(() => {
      function baz() {
        if (true) {
          let z = 1;
        }
        return z;
      }
      baz();
    }).toThrow();

    // ======================================================= //

    function bay() {
      let x = "outer";
      if (true) {
        let x = "inner";
      }
      return x;
    }
    expect(bay()).toEqual("outer");

    // ======================================================= //

    function baf() {
      let x = "outer";
      {
        let x = "inner";
      }
      return x;
    }
    expect(baf()).toEqual("outer");

    // ======================================================= //
    // Make the below function throw an exception
    // Hint: baz should have a return statement

    expect(() => {
      function bae() {
        const x = [1, 2];
        x = [1];

        return x;
      }
      bae();
    }).toThrow(new TypeError("Assignment to constant variable."));

    // ======================================================= //

    function bax() {
      const arr = [1, 2, 5];
      arr.push(6);
      return arr;
    }
    expect(bax()).toEqual([1, 2, 5, 6]);

    // ======================================================= //

    function bav() {
      const obj = { name: "foo", age: 40 };
      obj.profession = "dev";
      obj["age"] = 51;
      delete obj.name;
      return obj;
    }
    expect(bav()).toEqual({ age: 51, profession: "dev" });
  });
});
