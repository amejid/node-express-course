const fs = require('fs');
const os = require('os');

const sentence = require('./practice2');

const practiceWrite = async () => {
  await fs.writeFile('./content/practice.txt', sentence, () => {});
  await fs.writeFile(
    './content/practice.txt',
    os.userInfo().username,
    {
      flag: 'a',
    },
    () => {}
  );
};

practiceWrite();
