describe("destructuring and nested destructuring for arrays and objects", () => {
  // ======================================================= //
  // DESTRUCTURING
  // ======================================================= //
  test("array destructuring - basic", () => {
    const alphabets = ["a", "b", "c"];
    const [a, b, c] = alphabets;
    expect([a, b, c]).toEqual(["a", "b", "c"]);

    const names = ["John", "Doe", "Phil", "Hendry"];
    const [userA, , userB] = names;
    expect(userA).toEqual("John");
    expect(userB).toEqual("Phil");
  });

  test("array destructuring - few indexes and null iteration", () => {
    const alphabets = ["a", "b", "c"];
    const [a, b, c, d] = alphabets;
    expect([c, d]).toEqual(["c", undefined]);

    // ======================================================= //
    // Make the below function throw an exception
    expect(() => {
      function bae() {
        const [a, b] = null;

        return a;
      }
      bae();
    }).toThrow(new TypeError("null is not iterable"));
  });

  test("array destructuring - default", () => {
    let alphabets = ["a", "b", "c"];
    let [a, b, c, d = "D"] = alphabets;
    expect([c, d]).toEqual(["c", "D"]);

    alphabets = ["a", "b", "c", "d"];
    [a, b, c, d = "D"] = alphabets;
    expect([c, d]).toEqual(["c", "d"]);

    alphabets = ["a", "b", "c", "d"];
    [a, ...others] = alphabets;
    expect(others).toEqual(["b", "c", "d"]);
  });

  test("object destructuring", () => {
    const order = {
      item: "Shoe",
      customer: "John 42",
    };

    const { item, customer } = order;
    expect(item).toEqual("Shoe");
    expect(customer).toEqual("John 42");
  });

  test("object destructuring - null iteration", () => {
    const order = {
      item: "Shoe",
    };

    const { item, customer } = order;
    expect(item).toEqual("Shoe");
    expect(customer).toEqual(undefined);

    // ======================================================= //
    // Make the below function throw an exception
    expect(() => {
      function bae() {
        const { name } = null;
        return name;
      }
      bae();
    }).toThrow(
      new TypeError(
        "Cannot destructure property `name` of 'undefined' or 'null'."
      )
    );
  });

  test("object destructuring - default", () => {
    let order = {
      item: "Shoe",
    };

    let { item, customer = "Mr Joe" } = order;
    expect(item).toEqual("Shoe");
    expect(customer).toEqual("Mr Joe");

    order = {
      item: "Shoe",
      customer: "Mr Joe",
      address: "1st street",
    };

    let { address, ...all } = order;
    expect(item).toEqual("Shoe");
    expect(all).toEqual({
      item: "Shoe",
      customer: "Mr Joe",
    });
  });

  // ======================================================= //
  // NESTED DESTRUCTURING
  // ======================================================= //

  test("nested destructuring in array", () => {
    const position = [
      [10, 20, 30],
      [30, 40, 50],
    ];
    const [[xFromPosition1], [, , zFromPosition2]] = position;
    expect([xFromPosition1, zFromPosition2]).toEqual([10, 50]);
  });

  test("nested destructuring in objects", () => {
    const order = {
      item: "Shoe",
      customer: {
        name: "John",
        age: 42,
      },
    };

    let { item, customer } = order;
    expect(item).toEqual("Shoe");
    expect(customer).toEqual({
      name: "John",
      age: 42,
    });

    let {
      customer: { name, age, address = "1st street" },
    } = order;
    expect(name).toEqual("John");
    expect(age).toEqual(42);
    expect(address).toEqual("1st street");
  });

  test("nested destructuring in objects with different name", () => {
    const order = {
      item: "Shoe",
      customer: {
        firstName: "John",
        age: 42,
      },
    };

    let {
      customer: { firstName: name, age, address = "1st street" },
    } = order;
    expect(name).toEqual("John");
    expect(age).toEqual(42);
    expect(address).toEqual("1st street");
  });
});
