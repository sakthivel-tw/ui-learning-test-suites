describe("primitive and structural datatypes", () => {
  // ======================================================= //
  // TYPEOF
  // ======================================================= //
  test("typeof", () => {
    var foo = "String";
    expect(typeof foo).toBe("string");

    foo = false;
    expect(typeof foo).toBe("boolean");

    foo = 123.54;
    expect(typeof foo).toBe("number");

    foo = -31;
    expect(typeof foo).toBe("number");

    foo = 1;
    expect(typeof foo).toBe("number");

    foo = {};
    expect(typeof foo).toBe("object");

    foo = function () {};
    expect(typeof foo).toBe("function");

    foo = () => {}; // Arrow function
    expect(typeof foo).toBe("function");

    var bar = Symbol("Test");
    var boo = Symbol("Test");
    expect(bar === boo).toBe(false);
  });

  // ======================================================= //
  // UNDEFINED & NULL
  // ======================================================= //
  test("undefined & null", () => {
    var foo;
    var bar = null;

    expect(typeof foo).toBe("undefined");
    expect(typeof bar).toBe("object");
    expect(foo !== bar).toBe(true);
  });
});
