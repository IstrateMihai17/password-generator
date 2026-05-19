const pas1 = document.getElementById("mypas1"); 
const pas2 = document.getElementById("mypas2") ;
if(pas1.innerText===''){
    pas1.innerText='Password 1' ; 
    pas2.innerText='Password 2' ; 
} 
lowerCase = true ;
upperCase = true ; 
symbols = true ;
numbers = true ;
const passwordLength = 17 ;  
function getPassword(){
    let password = `` ;
    let password2=`` ; 
    let allowedChars= `<:;>]{[})&*(^$#@!abcdelmnopqrstuvwxfghi123456GHIJKLMNOPQRSTU7890jkyzABCDEFVWXYZ` ;
    for(let i=0;i<passwordLength;i++){
        const char = Math.floor(Math.random()*allowedChars.length) ; 
        password+=allowedChars[char] ; 
    }
    for(let i=0;i<passwordLength;i++){
        const char=Math.floor(Math.random()*allowedChars.length) ;
        password2+=allowedChars[char] ; 
    }
    pas1.innerText=password ;
    pas2.innerText=password2;
}
const but = document.querySelector(".generate") ; 
but.addEventListener('click' , ()=>{
    getPassword() ; 
})