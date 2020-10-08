describe("template literals, accessors", () => {
  // ======================================================= //
  // TEMPLATE LITERALS
  // ======================================================= //
  test("template literals", () => {
    expect(`2 - 6 = ${2 - 6}`).toEqual(`2 - 6 = -4`);
    expect("Hello World!" === `Hello World!`).toEqual(true);
    expect("Hello World!" === "Hello World!").toEqual(true);

    // ======================================================= //
    const media = "Image";
    const status = "succeeded";
    expect(`${media} upload ${status}!`).toEqual("Image upload succeeded!");
  });

  // ======================================================= //
  // ACCESSORS
  // ======================================================= //
  test("accessors", () => {
    let userName = "Philip";
    let user = {
      get name() {
        return userName;
      },
    };
    expect(user.name).toEqual("Philip");

    // ======================================================= //
    user = {
      firstName: "Doe",
      set name(newName) {
        this.firstName = newName;
      },
    };
    user.name = "John";
    expect(user.firstName).toEqual("John");

    // ======================================================= //
    const game = {
      paths: [],
      get direction() {
        return this.paths[this.paths.length - 1];
      },
      set direction(path) {
        return this.paths.push(path);
      },
    };

    game.direction = "UP";
    game.direction = "DOWN";
    game.direction = "LEFT";
    game.direction = "LEFT";

    expect(game.paths).toEqual(["UP", "DOWN", "LEFT", "LEFT"]);
    expect(game.direction).toEqual("LEFT");
  });
});
