// JavaScript Array Methods Assignment
// 1.
let arr=[10,20,30,40,50];
arr.push(60);
console.log(arr);

// 2.
arr.pop();
console.log(arr)

// 3. 
arr.shift()
console.log(arr)

// 4. 
arr.unshift(10)
console.log(arr)

// 5. 
arr.splice(0,0,10,20,30,40,50)  
console.log(arr)

// 6. 
let arr1=arr.slice(3,6)
console.log(arr1)

// 7. 
console.log(arr.indexOf(40))

// 8. 
let newarr = arr.map((item,i)=>{
       return item*i
    })
      console.log(newarr)


// 9. 
let filterarr= arr.filter((item)=>(item<=20));
console.log(filterarr)

// 10. 
let reducearr = arr.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
})
console.log(reducearr)