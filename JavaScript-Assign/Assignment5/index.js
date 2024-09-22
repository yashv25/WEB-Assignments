// Asynchronous JavaScript Assignment
// 1.
// function delayMessage(){
//     setTimeout(()=>{
//         console.log("Delay Message");
//     },2000)
// }
// delayMessage();

// 2. 
// function countdown(num){
//     let intervalevent= setInterval(()=>{
//         console.log(num);
//         if(num===0)
//         {
//             clearInterval(intervalevent);
//             console.log("countdown completed!");
//         }
//         num--;
//     },2000)
// }
// countdown(10);

// 3. 
// function countdown(num,callback){
//     let intervalevent= setInterval(()=>{
//         console.log(num);
//         if(num===0)
//         {
//             clearInterval(intervalevent);
//             if(typeof callback=="function")
//             callback();
//         }

//         num--;
//     },2000)
// }
// countdown(8,function(){
//     console.log("countdown completed! Executing callback function");
// })


// 4.
// function wait(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve();
//         },ms)
//     })
// }
// wait(2000).then(()=>{
//     console.log("2 seconds have passed!")
// })

// 5.
// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// }
// function countdown(number) {
//     return new Promise(async (resolve) => {
//         for (let i = number; i >= 0; i--) {
//             console.log(i);
//             await wait(1000);
//         }
//         resolve("Countdown complete!");
//     });
// }

// Example usage:
// countdown(5).then((message) => {
//     console.log(message);
// });


// 6. 
// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function delayedLogSequence(messages, delays) {
//     return new Promise(async (resolve) => {
//         for (let i = 0; i < messages.length; i++) {
//             console.log(messages[i]);
//             await wait(delays[i]);
//         }
//         resolve("All messages logged!");
//     });
// }

// // Example usage:
// const messages = ["First message", "Second message", "Third message"];
// const delays = [1000, 2000, 1500]; 

// delayedLogSequence(messages, delays).then((message) => {
//     console.log(message); 
// });


// 7. 
// function wait(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function delayedLogSequence(messages, delays) {
//     return new Promise(async (resolve) => {
//         for (let i = 0; i < messages.length; i++) {
//             console.log(messages[i]);
//             await wait(delays[i]); 
//         }
//         resolve("All messages logged!");
//     });
// }

// // Example usage:
// const messages = ["First message", "Second message", "Third message"];
// const delays = [1000, 2000, 1500]; 
// delayedLogSequence(messages, delays).then((message) => {
//     console.log(message); 
// });


// 8. 
// function randomDelayMessage(message) {
//     return new Promise((resolve) => {
//        
//         const delay = Math.floor(Math.random() * 5000) + 1000;

//         setTimeout(() => {
//             console.log(message);
//             resolve(); 
//         }, delay);
//     });
// }

// // Example usage:
// randomDelayMessage("This message is displayed after a random delay.").then(() => {
//     console.log("Message logged after random delay.");
// });


// 9.
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            action();
        }, interval);

        setTimeout(() => {
            clearInterval(intervalId);
            resolve("Action stopped after the specified duration");
        }, duration);
    });
}

// Example usage:
repeatAction(() => {
    console.log("Action executed");
}, 1000, 5000).then((message) => {
    console.log(message);
});
