//your JS code here. If required.
// const h = document.getElementbyId("output");
// Promise prom=new Promise(resolve());
// function resolve(){
// 	h.innerText("hii");
// }setTimeout(resolve(),1000);

const h = document.getElementbyId("output");
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Hello world!"]);
        }, 1000);
    });
      
    promise.then(values => {
    h.innertext(values);
    });