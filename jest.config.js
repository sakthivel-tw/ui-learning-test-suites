//Or async function
module.exports = async () => {
  return {
    verbose: false,
    rootDir: "./",
    setupFilesAfterEnv: ["./jest.setup.js"],
  };
};
