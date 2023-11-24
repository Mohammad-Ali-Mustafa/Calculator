

// $(document).ready(function(){
//     let value1 = $(".inputbox")



//     $("body").keydown(function(a){
//         if(a.key == "1"){
//             value1.val("1")
//             value1 = Number(value1);
//             // b = Number(a)
//         }
//     }) 
// }) 



$("#input");
 document.addEventListener("keydown" , (event) => {
     if(event.key == "1") {input.value += event.key;}
     if(event.key == "2") {input.value += event.key;}
     if(event.key == "3") {input.value += event.key;}
     if(event.key == "4") {input.value += event.key;}
     if(event.key == "5") {input.value += event.key;}
     if(event.key == "6") {input.value += event.key;}
     if(event.key == "7") {input.value += event.key;}
     if(event.key == "8") {input.value += event.key;}
     if(event.key == "9") {input.value += event.key;}
     if(event.key == "+") {input.value += event.key;}
     if(event.key == "-") {input.value += event.key;}
     if(event.key == "/") {input.value += event.key;}
     if(event.key == "*") {input.value += event.key;}
     if(event.key == "c") {input.value = " ";}
     if(event.key == "=") { input.value = eval(input.value) ;}
     if(event.key == "Enter") { input.value = eval(input.value) ;}
     if(event.key == "Backspace") { input.value = input.value.slice(0 , -1)}
 });




 let value = document.getElementById("input");
 let btn = document.getElementById("btn");
 
 btn.addEventListener("click" , function(){
     btn.classList.toggle("active");
     value.classList.toggle("night");
 });

 
 let value1 = document.getElementById("formstyle12");
 let btn1 = document.getElementById("btn");
 
 btn1.addEventListener("click" , function(){
     btn1.classList.toggle("active");
     value1.classList.toggle("night");
 });


 let content = document.getElementById("clear");
 let darkmode = document.getElementById("btn");
 
 darkmode.addEventListener("click" , function(){
     darkmode.classList.toggle("active");
     content.classList.toggle("night");
 });


 let content1 = document.getElementById("number1");
 let darkmode1 = document.getElementById("btn");
 
 darkmode1.addEventListener("click" , function(){
     darkmode1.classList.toggle("active");
     content1.classList.toggle("night");
 });


 let content12 = document.getElementById("number2");
 let darkmode12 = document.getElementById("btn");
 
 darkmode12.addEventListener("click" , function(){
     darkmode12.classList.toggle("active");
     content12.classList.toggle("night");
 });
 

 
let content1234g = document.getElementById("number3");
let darkmode1234g = document.getElementById("btn");

darkmode1234g.addEventListener("click" , function(){
    darkmode1234g.classList.toggle("active");
    content1234g.classList.toggle("night");
});


 let content1234 = document.getElementById("number4");
 let darkmode1234 = document.getElementById("btn");
 
 darkmode1234.addEventListener("click" , function(){
     darkmode1234.classList.toggle("active");
     content1234.classList.toggle("night");
 });
 

 let conten = document.getElementById("number5");
 let darkmod = document.getElementById("btn");
 
 darkmod.addEventListener("click" , function(){
     darkmod.classList.toggle("active");
     conten.classList.toggle("night");
 });
 

 let c = document.getElementById("number6");
 let d = document.getElementById("btn");
 
 d.addEventListener("click" , function(){
     d.classList.toggle("active");
     c.classList.toggle("night");
 });
  

 let e = document.getElementById("number7");
 let f = document.getElementById("btn");
 
 f.addEventListener("click" , function(){
     f.classList.toggle("active");
     e.classList.toggle("night");
 });
  

 let g = document.getElementById("number8");
 let h = document.getElementById("btn");
 
 h.addEventListener("click" , function(){
     h.classList.toggle("active");
     g.classList.toggle("night");
 });
   

 let k = document.getElementById("number9");
 let j = document.getElementById("btn");
 
 j.addEventListener("click" , function(){
     j.classList.toggle("active");
     k.classList.toggle("night");
 });
   

 let o = document.getElementById("number10");
 let p = document.getElementById("btn");
 
 p.addEventListener("click" , function(){
     p.classList.toggle("active");
     o.classList.toggle("night");
 });
   

 let q = document.getElementById("number11");
 let w = document.getElementById("btn");
 
 w.addEventListener("click" , function(){
     w.classList.toggle("active");
     q.classList.toggle("night");
 });
   

 let ab = document.getElementById("number12");
 let cd = document.getElementById("btn");
 
 cd.addEventListener("click" , function(){
     cd.classList.toggle("active");
     ab.classList.toggle("night");
 });
   

 let ef = document.getElementById("number13");
 let fg = document.getElementById("btn");
 
 fg.addEventListener("click" , function(){
     fg.classList.toggle("active");
     ef.classList.toggle("night");
 });
   

 let ij = document.getElementById("number14");
 let kl = document.getElementById("btn");
 
 kl.addEventListener("click" , function(){
     kl.classList.toggle("active");
     ij.classList.toggle("night");
 });
   

 let lm = document.getElementById("number15");
 let mn = document.getElementById("btn");
 
 mn.addEventListener("click" , function(){
     mn.classList.toggle("active");
     lm.classList.toggle("night");
 });
    

 let lma = document.getElementById("number16");
 let mna = document.getElementById("btn");
 
 mna.addEventListener("click" , function(){
     mna.classList.toggle("active");
     lma.classList.toggle("night1");
 });

 
 let lmfg = document.getElementById("main");
 let mnfg = document.getElementById("btn");
 
 mnfg.addEventListener("click" , function(){
     mnfg.classList.toggle("active");
     lmfg.classList.toggle("night");
 });



 

 

 


 