describe("callback, function bind and arrow functions", () => {
  // ======================================================= //
  // CALLBACK
  // ======================================================= //

  test("callbacks", () => {
    const foo = function () {
      return 5;
    };

    function bar(cb) {
      return 5;
    }

    expect(bar(foo)).toEqual(10);
  });

  // ======================================================= //
  // FUNCTION BIND
  // ======================================================= //

  test("function binding", () => {
    const item = { name: "desktop" };
    function itemName() {
      return this.name;
    }

    expect(itemName()).toEqual("desktop");

    let customer = {
      name: "John",
      country: "UK",
      address() {
        return `${this.name}, ${this.country}`;
      },
    };
    expect(customer.address()).toEqual("");

    customer = {
      name: "John",
      country: "UK",
      address() {
        return function () {
          return `${this.name}, ${this.country}`;
        };
      },
    };
    expect(customer.address()).toEqual("John, UK");
  });

  // ======================================================= //
  // ARROW FUNCTIONS
  // ======================================================= //

  test("arrow functions", () => {
    const foo = [1, 2, 3].map(() => 5);

    expect(foo).toEqual([5, 5, 5]);

    const bar = (first, second, ...rest) => rest;

    expect(bar(1, 2)).toEqual([3, 4]);

    let customer = () => ({
      name: "John",
      age: 36,
    });

    expect(customer()).toEqual("John");

    customer = {
      name: "John",
      country: "UK",
      address() {
        const format = () => {
          return `${this.name}, ${this.country}`;
        };
      },
    };
    expect(customer.address()()).toEqual("John, UK");
  });
});
