const log = (global.console.log = jest.fn());

import { Cascadia } from "../src/cascadia";

describe("cascadia class", () => {
  let cascadiaInstance: Cascadia;
  beforeAll(() => {
    cascadiaInstance = new Cascadia();
  });

  test(
    "it should take more than 5 seconds to complete the animation",
    async () => {
      const start = new Date().getTime();
      await cascadiaInstance.display();
      const end = new Date().getTime();
      expect(end - start).toBeGreaterThanOrEqual(1000 * 5);
    },
    1000 * 10
  );

  test("the last message should be the <3", () => {
    expect(log).toHaveBeenCalledWith("♥️  @evantahler");
  });
});
