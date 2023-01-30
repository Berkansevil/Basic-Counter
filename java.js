
let counter =0;
let counterDOM = document.querySelector('#counter')

counterDOM.innerHTML=counter;
let increaseDOM=document.querySelector('#increase');
let decreaseDOM=document.querySelector('#decrease');

increaseDOM.addEventListener("click",MyFunction);
decreaseDOM.addEventListener("click",MyFunction);

function MyFunction(){
    console.log(this.id)
    this.id =="increase" ? counter += 1 : counter -=1
        counterDOM.innerHTML=counter
   
        
    
}

