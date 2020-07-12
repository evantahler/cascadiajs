#! /usr/bin/env node

import { Cascadia } from "./cascadia";

(async function () {
  const cascadiaInstance = new Cascadia();
  await cascadiaInstance.display();
})();
