let input1=document.getElementById('place')
input1.addEventListener('click',function(){
let input2=document.createElement('li')
let val=document.getElementById('content1')
let input3=document.createTextNode(input1)
input2.appendChild(input3)
document.getElementById('swa').appendChild(input2)
});