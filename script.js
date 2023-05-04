//your JS code here. If required.
const h = document.getElementbyId("output");
Promise prom=new Promise(resolve());
function resolve(){
	h.innerText("hii");
}setTimeout(resolve(),1000);