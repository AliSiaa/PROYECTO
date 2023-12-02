const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");

const izquierda = document.querySelector("#izquierda");
izquierda.addEventListener("click", function(){
    window.location.href = "32.html";
})

const derecha = document.querySelector("#derecha");
derecha.addEventListener("click", function(){
    window.location.href = "../contraportada.html";
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
