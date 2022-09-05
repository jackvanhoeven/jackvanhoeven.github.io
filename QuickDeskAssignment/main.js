

let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
let counter4 = document.getElementById("counter4");

let now_serving = document.getElementById("now_serving");
let last_number = document.getElementById("last_number");


let compl_curr1 = true;
let compl_curr2 = true;
let compl_curr3 = true;
let compl_curr4 = true;

let c2_is_online = true;
let c1_is_online = true;
let c3_is_online = true;
let c4_is_online = true;

const counter1_arr = [];
const counter2_arr = [];
const counter3_arr = [];
const counter4_arr = [];


var statusCounter1 = document.getElementById("statusCounter1");
var statusCounter2 = document.getElementById("statusCounter2");
var statusCounter3 = document.getElementById("statusCounter3");
var statusCounter4 = document.getElementById("statusCounter4");


var compCurrBtn1 = document.getElementById("compCurrBtn1");
var compCurrBtn2 = document.getElementById("compCurrBtn2");
var compCurrBtn3 = document.getElementById("compCurrBtn3");
var compCurrBtn4 = document.getElementById("compCurrBtn4");

class Queue {
    constructor() {
        this.items = [];
    }
    
    // add element to the queue
    enqueue(element) {
         this.items.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.items.length > 0) {
             this.items.shift();
        }
    }
    
    // view the last element
    peek() {
         this.items[this.items.length - 1];
    }
    // front function
    front(){
        // returns the Front element of 
        // the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    // check if the queue is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the queue
    size(){
         this.items.length;
    }
 
    // empty the queue
    clear(){
        this.items = [];
    }
}


let ticket_number = 1000;



let queue = new Queue();

let queue1 = new Queue();
let queue2 = new Queue();
let queue3 = new Queue();
let queue4 = new Queue();



function takeNumber(){
   
  
   
    
    ticket_number += ticket_number=1;
    queue.enqueue(ticket_number);

    document.getElementById("now_serving").innerHTML = ticket_number+1;
    document.getElementById("last_number").innerHTML = ticket_number+2
    
   
}

function displayInfo(){

    

    if(queue1.isEmpty() && c1_is_online ==true){
        statusCounter1.style.background = "#25e8c1"
        
    }else if(!queue1.isEmpty()){
        statusCounter1.style.background = "#e6350e"

    }else {
        statusCounter1.style.background = "#25e8c1"
    }
   

}
function displayInfo2(){

    
    if(queue2.isEmpty() && c2_is_online ==true){
        statusCounter2.style.background = "#25e8c1"
        
    }else if(!queue2.isEmpty()){
        statusCounter2.style.background = "#e6350e"

    }else {
        statusCounter2.style.background = "#25e8c1"
    }

  
   

}
function displayInfo3(){
    
    if(queue3.isEmpty() && c3_is_online ==true){
        statusCounter3.style.background = "#25e8c1"
        
    }else if(!queue3.isEmpty()){
        statusCounter3.style.background = "#e6350e"

    }else {
        statusCounter3.style.background = "#25e8c1"
    }

    
   

}
function displayInfo4(){
    
    if(queue4.isEmpty() && c4_is_online ==true){
        statusCounter4.style.background = "#25e8c1"
        
    }else if(!queue4.isEmpty()){
        statusCounter4.style.background = "#e6350e"

    }else {
        statusCounter4.style.background = "#25e8c1"
    }

    
   

}

function counter1GoOffline(){

    var x = document.getElementById("btn1");
   

   

  if (x.innerHTML === "Go Offline") {
    statusCounter1.style.background = "#f0eeeb"
    x.innerHTML = "Go Online";
    counter1.innerHTML = "Offline";
   
      c1_is_online = false;
      document.getElementById("callNextBtn1").disabled = true;
      compCurrBtn1.disabled = true;
    
  } else {
    x.innerHTML = "Go Offline";
    statusCounter1.style.background = "#25e8c1"
    c1_is_online = true;
    document.getElementById("callNextBtn1").disabled = false;
    compCurrBtn1.disabled = false;
  }

}

function counter2GoOffline(){
    var x = document.getElementById("btn2");
   

  if (x.innerHTML === "Go Offline") {
    statusCounter2.style.background = "#f0eeeb"
    x.innerHTML = "Go Online";
    counter2.innerHTML = "Offline";
    
    c2_is_online = false;
    document.getElementById("callNextBtn2").disabled = true;
    compCurrBtn2.disabled = true;
  } else {
    statusCounter2.style.background = "#25e8c1"
    x.innerHTML = "Go Offline";
    c2_is_online = true;
    document.getElementById("callNextBtn2").disabled = false;
    compCurrBtn2.disabled = false;
  }

}
function counter3GoOffline(){
    var x = document.getElementById("btn3");
   
  if (x.innerHTML === "Go Offline") {
    x.innerHTML = "Go Online";
    counter3.innerHTML = "Offline";
    statusCounter3.style.background = "#f0eeeb"
    c3_is_online = false;
    document.getElementById("callNextBtn3").disabled = true;
    compCurrBtn3.disabled = true;
  } else {
    x.innerHTML = "Go Offline";
    statusCounter3.style.background = "#25e8c1"
    c3_is_online = true;
    document.getElementById("callNextBtn3").disabled = false;
    compCurrBtn3.disabled = false;
  }

}
function counter4GoOffline(){
    var x = document.getElementById("btn4");
   
  if (x.innerHTML === "Go Offline") {
    statusCounter4.style.background = "#f0eeeb"
    x.innerHTML = "Go Online";
    c4_is_online = false;
    document.getElementById("callNextBtn4").disabled = true;
    compCurrBtn4.disabled = true;
    counter4.innerHTML = "Offline";
  } else {
    x.innerHTML = "Go Offline";
    statusCounter4.style.background = "#25e8c1"
    c4_is_online = true;
    document.getElementById("callNextBtn4").disabled = false;
    compCurrBtn4.disabled = false;
  }

}

function counter1CompleteCurr(){
    compl_curr1 = true;
    document.getElementById("callNextBtn1").disabled = false;
    statusCounter1.style.background = "#25e8c1"
    queue1.clear();

}
function counter2CompleteCurr(){
    compl_curr2 = true;
    document.getElementById("callNextBtn2").disabled = false;
    statusCounter2.style.background = "#25e8c1"
    
    queue2.clear();
    
}
function counter3CompleteCurr(){
    compl_curr3 = true;
    document.getElementById("callNextBtn3").disabled = false;
    statusCounter3.style.background = "#25e8c1"
    queue3.clear();
    
}
function counter4CompleteCurr(){
    compl_curr4 = true;
    document.getElementById("callNextBtn4").disabled = false;
    statusCounter4.style.background = "#25e8c1"
    queue4.clear();
    
}


function counter1CallNext(){

   
    queue1.items[0] = queue.items[0];
if(compl_curr1==true &&  c1_is_online == true){

    if(queue.isEmpty()){
       
        counter1.innerHTML ="No ticket";
        queue1.clear();
      
      }else{
       
        counter1.innerHTML = queue1.items[0];
       
        queue.dequeue();
        compl_curr1 = false;
        
        
      }

    
}else{

    document.getElementById("callNextBtn1").disabled = true;
}

 
displayInfo();


}
function counter2CallNext(){

    queue2.items[0] = queue.items[0];
    if(compl_curr2==true &&  c2_is_online == true){
    
        if(queue.isEmpty()){
           
            counter2.innerHTML ="No ticket";
            queue2.clear();
          
          }else{
           
            counter2.innerHTML = queue2.items[0];
           
            queue.dequeue();
            compl_curr2 = false;
            
            
          }
    
    }else{
    
        document.getElementById("callNextBtn2").disabled = true;
    }
    
    displayInfo2();
    
}
function counter3CallNext(){
    queue3.items[0] = queue.items[0];
    if(compl_curr3==true &&  c3_is_online == true){
    
        if(queue.isEmpty()){
           
            counter3.innerHTML ="No ticket";
            queue3.clear();
          
          }else{
           
            counter3.innerHTML = queue3.items[0];
           
            queue.dequeue();
            compl_curr3 = false;
            
            
          }
    
    }else{
    
        document.getElementById("callNextBtn3").disabled = true;
    }
    
    displayInfo3();
    
}
function counter4CallNext(){
    queue4.items[0] = queue.items[0];
    if(compl_curr4==true &&  c4_is_online == true){
    
        if(queue.isEmpty()){
           
            counter4.innerHTML ="No ticket";
            queue4.clear();
          
          }else{
           
            counter4.innerHTML = queue4.items[0];
           
            queue.dequeue();
            compl_curr4 = false;
            
            
          }
    
    }else{
    
        document.getElementById("callNextBtn4").disabled = true;
    }
    
    displayInfo4();
}


