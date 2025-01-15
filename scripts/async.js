// const promise=new Promise((resolve,reject)=>{
//     reject({user:"Blanka"})
// })
// promise
//     .then((data)=>{
//         return(data)
//     })
//     .then((user)=>{
//         console.log(user)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// const promise=new Promise((resolve,reject)=>{
//     resolve({user:"Blanka"})
// })
// promise
//     .then((data)=>{
//         const user=data
//         return fetch("https://jsonplaceholder.typicode.com/todos/1")
//     })
//     .then((todos)=>{
//         console.log(todos)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("this is my data from the server"),2000)
// })
// promise.then((res)=>{
//     console.log(res)
// })

// fetch("https://jsonplaceholder.typico")
//     .then((data)=>{
//         return data.json()
//     })
//     .then((jsonedData)=>{
//         console.log(jsonedData)
//     })
//     .catch((err)=>{
//         console.log("oh no something went wrong")
//     })
//     .finally(()=>{
//         console.log("well everything is done,we tried")
//     })

// async function getTodos(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const data=await response.json()
//         console.log(data)
//     }
//     catch(err){
//         console.log("something went wrong")
//         console.log(err)
//     }
// }
// getTodos()


console.log("start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`subscribe to ${username}`);
        }, 1000);
    });
}

function likethevideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${video} video`);
        },1500); // Pass the delay parameter correctly
    });
}

function sharethevideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`share the ${video} video`);
        }, 1500); // Pass the delay parameter correctly
    });
}
// importantAction("shaurya").then((res)=>{
//     console.log(res);
//     likethevideo("javascript").then((res)=>{
//         console.log(res)
//             sharethevideo("javascript").then((res)=>{
//                 console.log(res);
//             });
//         });
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Promise.race([
//     importantAction("shaurya"),
//     likethevideo("javascript"),
//     sharethevideo("javascript"),
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log("error promise failed", err);
//     });
const result=async()=>{
    try{
        const message1=await importantAction("shaurya");
        const message2=await likethevideo("javascript");
        const message3=await sharethevideo("javascript");
        console.log({message1,message2,message3});
    }
    catch(error){
        console.error("promise failed",error);
    }
};
result();
console.log("stop");
