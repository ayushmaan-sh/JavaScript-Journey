//      Loop entry -> Condition
//      Condition -> if true -> set of instructions -> Back to check the condition again until the true instruction are there.
//          |
//          V
//       if false


// Guidlines for loops : keywords - while, for, forof, foreach, dowhile
//                     : termination condition (to avoid infinte execution)
//                     : body of loop

// for loop



for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


//nested loop

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.table(i + "x" + j + "=" + i*j);    
    }
}

//loop on array

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.table(element);
}

// break and continue;

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break; // stop the code.
    }
    console.log(`Value: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 13){
        console.log(`Kicked out 13`);
        continue; // skip the value
    }
    console.log(`Value: ${index}`);
}
