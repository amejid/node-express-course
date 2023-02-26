const { writeFile } = require('fs/promises');
const os = require('os');

const sentence = require('./practice2');

const practiceWrite = async () => {
  await writeFile('./content/practice.txt', sentence);
  await writeFile('./content/practice.txt', os.userInfo().username, {
    flag: 'a',
  });
};

practiceWrite();
