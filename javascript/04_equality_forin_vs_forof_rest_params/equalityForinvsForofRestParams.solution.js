describe("equality operators, for-of vs for-in & rest parameters", () => {
  // ======================================================= //
  // EQUALITY OPERATORS
  // ======================================================= //
  test("equality operators", () => {
    expect(0 === false).toEqual(false);
    expect(`17` === 17).toEqual(false);
    expect("" === false).toEqual(false);
    expect(0 === "0").toEqual(false);
    expect(null === undefined).toEqual(false);
  });

  // ======================================================= //
  // FOR..OF VS FOR..IN
  // ======================================================= //
  test("extract keys and values in an object using for..in", () => {
    const foo = { a: 1, b: 2 };
    const keys = [],
      values = [];
    for (const key in foo) {
      keys.push(key);
      values.push(foo[key]);
    }
    expect(keys).toEqual(["a", "b"]);
    expect(values).toEqual([1, 2]);
  });

  test("iterate over an array using for..in", () => {
    const foo = ["a", "b"];
    const keys = [],
      values = [];
    for (const key in foo) {
      keys.push(key);
      values.push(foo[key]);
    }
    expect(keys).toEqual(["0", "1"]);
    expect(values).toEqual(["a", "b"]);
  });

  test("iterate over a sparse array using for..in", () => {
    const foo = [];
    foo[3] = "d";
    const keys = [],
      values = [];
    for (const key in foo) {
      keys.push(key);
      values.push(foo[key]);
    }
    expect(keys).toEqual(["3"]);
    expect(values).toEqual(["d"]);
  });

  test("iterate over a sparse array using for..of", () => {
    const foo = [];
    foo[3] = "d";
    const values = [];
    for (const value of foo) {
      values.push(value);
    }
    expect(values).toEqual([undefined, undefined, undefined, "d"]);
  });

  // ======================================================= //
  // REST PARAMETERS
  // ======================================================= //
  test("rest parameters", () => {
    const foo = (...args) => {
      return args;
    };
    foo(1, 100, 1000);

    expect(foo(1, 100, 1000)).toEqual([1, 100, 1000]);

    // ======================================================= //

    const bar = (quantity, ...args) => {
      args.push(quantity);
      return args;
    };
    bar(10, 1, 100, 1000);

    expect(bar(10, 1, 100, 1000)).toEqual([1, 100, 1000, 10]);
  });
});
