const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const text5 = document.querySelector("#text5");
const text6 = document.querySelector("#text6");
const text7 = document.querySelector("#text7");
const text8 = document.querySelector("#text8");

const izquierda = document.querySelector("#izquierda");
izquierda.addEventListener("click", function(){
    window.location.href = "21.html";
})

const derecha = document.querySelector("#derecha");
derecha.addEventListener("click", function(){
    window.location.href = "23.html";
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

img4.addEventListener("click", function(){

    text4.style.display = "inline";

    if( img4.style.boxShadow === 'none'){
        img4.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text4.style.display = "none";
    } 
    
    else {
        img4.style.boxShadow = 'none';
        text4.style.display = "inline";
    }
   
})

img5.addEventListener("click", function(){
   
    if( img5.style.boxShadow === 'none'){
        img5.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text5.style.display = "none";
    } 

    else {
        img5.style.boxShadow = 'none';
        text5.style.display = "inline";
    }
    
})

img6.addEventListener("click", function(){
    
    text6.style.display = "inline";

    if( img6.style.boxShadow === 'none'){
        img6.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text6.style.display = "none";
    } 
    
    else {
        img6.style.boxShadow = 'none';
        text6.style.display = "inline";
    }

})

img7.addEventListener("click", function(){

    text7.style.display = "inline";

    if( img7.style.boxShadow === 'none'){
        img7.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text7.style.display = "none";
    } 
    
    else {
        img7.style.boxShadow = 'none';
        text7.style.display = "inline";
    }

})

img8.addEventListener("click", function(){

    text8.style.display = "inline";

    if( img8.style.boxShadow === 'none'){
        img8.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
        text8.style.display = "none";
    } 
    
    else {
        img8.style.boxShadow = 'none';
        text8.style.display = "inline";
    }
   
})

