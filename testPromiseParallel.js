const P1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise1');
        resolve(1)
    },4000);
})


const P2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise2');
        resolve(2);
    },2000);
})

// console.log('all');
// Promise.all([P1,P2])
// .then(result=>console.log('Result'+result))
// .catch(err=>console.log('error:'+err.message));

console.log('race');
Promise.race([P1,P2])
.then(result=>console.log('Result'+result))
.catch(err=>console.log('error:'+err.message));

