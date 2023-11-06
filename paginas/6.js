const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const text0 = document.querySelector("#text0");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");

const izquierda = document.querySelector("#izquierda");
izquierda.addEventListener("click", function(){
    window.location.href = "5.html";
})

const derecha = document.querySelector("#derecha");
derecha.addEventListener("click", function(){
    window.location.href = "7.html";
})

img1.addEventListener("click", function(){
   
    if( img1.style.boxShadow === 'none'){
        img1.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text1.style.display = "none";
    } 

    else {
        img1.style.boxShadow = 'none';
        text1.style.display = "inline";
    }
    
})

img2.addEventListener("click", function(){
    
    text2.style.display = "inline";

    if( img2.style.boxShadow === 'none'){
        img2.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text2.style.display = "none";
    } 
    
    else {
        img2.style.boxShadow = 'none';
        text2.style.display = "inline";
    }
})

img3.addEventListener("click", function(){

    text3.style.display = "inline";

    if( img3.style.boxShadow === 'none'){
        img3.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text3.style.display = "none";
    } 
    
    else {
        img3.style.boxShadow = 'none';
        text3.style.display = "inline";
    }
})