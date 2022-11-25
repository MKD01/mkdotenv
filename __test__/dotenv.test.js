const dotenv = require("dotenv");
const mkdDotenv = require("../mkdDotenv");

describe("mkdDotenv", () => {
  describe(".config()", () => {
    test("should be a function which returns undefined", () => {
      expect(typeof mkdDotenv.config).toBe("function");
      expect(mkdDotenv.config()).toBe(undefined);
    });

    test("should add a key value pair to process.env from the .env file by default", () => {
      mkdDotenv.config();
      expect(process.env.defaultENV).toBe("this_is_the_default_.env");
      expect(process.env).toHaveProperty(
        "defaultENV",
        "this_is_the_default_.env"
      );
    });

    test("should add a key value pair to process.env when given a custom path file to a .env file", () => {
      mkdDotenv.config(`${__dirname}/../.env.test`);
      expect(process.env.testENV).toBe("test_env");
      expect(process.env).toHaveProperty("testENV", "test_env");
    });

    test("should add all key value pairs to process.env when given multiple key value pairs on multiple lines", () => {
      mkdDotenv.config(`${__dirname}/../.env.multiple`);
      expect(process.env).toMatchObject({
        ONEENV: "one_env",
        TWOENV: "two_env",
      });
    });
  });

  // describe(".parse()", () => {
  //   test("should be a function", () => {
  //     expect(typeof dotenv.parse).toBe("function");
  //   });

  //   test("should be able to take a key add a key value pair to process.env from the .env file by default", () => {
  //     expect(dotenv.parse("test=this_is_a_test")).toEqual({
  //       test: "this_is_a_test",
  //     });
  //   });
  // });
});
