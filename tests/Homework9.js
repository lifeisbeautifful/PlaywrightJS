//Train Promises


//Promise func - such funcs will be delegated Wep API to process and js program will move on
let fetchUrlData = function(url){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(fetch(url));
        }, 5000)
    })
}


//Key words: then/catch - will get the returned result(resolved/rejected) of specified promise
//first then will return promise, second then will return promise data
//!!! JS do not support multythreading, so await/then will not stop the main thread, it will continue to executing code,
//written after await or then - result of promise will be hold in event loop and will be moved to stack for executing after 
//last line of program code will be executed, promises result will be executing after all code from "main"
let getPromdataUsingThen = fetchUrlData("https://jsonplaceholder.typicode.com/comments/1")
                           .then(data => data.json())
                           .then(data => console.log(data))
                           .catch(error => console.log(error));


//or call then inside first one as chaining methods 
fetchUrlData("https://jsonplaceholder.typicode.com/comments/1")
.then(data => data.json().then(data => console.log(data.id)))
.catch(error => console.log(error));


//Key words async/await - are interchangeable with then/catch
//await returns promise
let getPromiseAsync = async function(promise, url){
    console.log(await promise(url));
}

//returns promise data
let getPromiseDataAsync = async function(promise, url){
    let promiseData = await promise(url);
    return await promiseData.json();
}


const allHomeworkProms = [getPromiseDataAsync(fetchUrlData, "https://jsonplaceholder.typicode.com/posts/2 "), 
                          getPromiseDataAsync(fetchUrlData, "https://jsonplaceholder.typicode.com/comments/1 ")]

//Such func will start to execute if all promises from argument array will have possitive result
Promise.all(allHomeworkProms)
.then((results) => {
    results.forEach(res => console.log("Id: " + res.id));
}).catch((error) => {
    console.log(error);
})


//Such func will start to execute after all promises from arg array will have any value
let execAllProms = async () => console.log(await Promise.allSettled(allHomeworkProms));
execAllProms();






