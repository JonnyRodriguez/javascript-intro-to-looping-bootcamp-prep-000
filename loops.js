var forLoop = (array) => {
  for( let i=0; i<25; i++ ) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
};

var whileLoop = (number) => {
  while (number>0) {
    console.log(--number);
  }
  return "done";
};

var doWhileLoop = (num) => {
  do {
    
  } while (incrementVariable() < num);
};
