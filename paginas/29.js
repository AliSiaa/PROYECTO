const img1 = document.querySelector("#img1");
const text1 = document.querySelector("#text1");

const izquierda = document.querySelector("#izquierda");
izquierda.addEventListener("click", function(){
    window.location.href = "28.html";
})

const derecha = document.querySelector("#derecha");
derecha.addEventListener("click", function(){
    window.location.href = "30.html";
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

