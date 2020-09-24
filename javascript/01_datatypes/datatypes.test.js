describe("primitive and structural datatypes", () => {
  // ======================================================= //
  // TYPEOF
  // ======================================================= //
  test("typeof", () => {
    var foo = "String";
    expect(typeof foo).toBe();

    foo = false;
    expect(typeof foo).toBe();

    foo = 123.54;
    expect(typeof foo).toBe();

    foo = -31;
    expect(typeof foo).toBe();

    foo = 1;
    expect(typeof foo).toBe();

    foo = {};
    expect(typeof foo).toBe();

    foo = function () {};
    expect(typeof foo).toBe();

    foo = () => {}; // Arrow function
    expect(typeof foo).toBe();

    var bar = Symbol("Test");
    var boo = Symbol("Test");
    expect(bar === boo).toBe();
  });

  // ======================================================= //
  // UNDEFINED & NULL
  // ======================================================= //
  test("undefined & null", () => {
    var foo;
    var bar = null;

    expect(typeof foo).toBe();
    expect(typeof bar).toBe();
    expect(foo !== bar).toBe();
  });
});
