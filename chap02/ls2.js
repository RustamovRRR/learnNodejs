const fs = require("fs").promises;

async function listFiles() {
  try {
    var dir = ".";
    if (process.argv[2]) dir = process.argv[2];
    const files = await fs.readdir(dir);
    for (const fn of files) {
      console.log(fn);
    }
  } catch (error) {
    console.log(error);
  }
}

listFiles();
