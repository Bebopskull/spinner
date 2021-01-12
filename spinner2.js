

function cycles(number){
  const spinner=[`\r|   `,`\r/   `,`\r-   `,`\r\\  `,]
  ////function spin spins 1 time the spinner.
  function spin(arr, stime){
    let delay = stime;
    for(let i in arr){
      delay+=200;
      setTimeout(()=>{
        process.stdout.write(`${arr[i]}`)
      }, delay);
    };
    return delay;
  };
///now lets cycle the spinner n number of times
  let loop = 1;
  let delay = spin(spinner,100);
  for(loop; loop <= number; loop++){
    delay = spin(spinner, delay);
  }
  
}

///now we call the function with the number of cycles we want it to perform (could this be relative to the ms that take a task to complete? O,O!)
cycles(15);


