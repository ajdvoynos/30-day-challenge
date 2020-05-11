import happy from '../AprilChallenge/week1/happy.js';
import fs from 'fs';

fs.open('output.txt', 'a', (err, fd) => {
  if (err) return console.log(err);

  for (let index = 0; index < 5000; index++) {
    fs.write(fd, index + ": " + happy(index) + " \n", (err) => {
      if(err) return console.log(err);
    })
  }

});