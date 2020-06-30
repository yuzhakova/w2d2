const printWords = function(arr) {
  console.log(`${arr}`);
};

// setTimeout(() => {printWords('4311o', 'th3r3', 'w0r1d')},3000)
// printWords('4311o')('th3r3')('w0r1d')

setTimeout(() => {
  printWords('4311o');
  setTimeout(() =>{
    printWords('th3r3');
    setTimeout(() => {
      printWords('w0r1d');
    }, 1000);
  }, 1000);
},1000);