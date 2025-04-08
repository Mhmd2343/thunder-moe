function changeToBeige(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_beige.jpeg";
} 
function changeToBlue(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_blue.webp";
}  
function changeToGreen(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_green.jpg";
}  
function changeToRed(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_red.jpg";
}  
function changeToBlack(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_black.jpg";
}  
function changeToYellow(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_yellow.jpeg";
}  
function changeToLightBlue(){
    var image = document.getElementById('first_product');
    image.src= "../myWebsite/Pictures/Products/Product1/f1_blue_light.jpg";
}  
function changeToBeige2(){
    var image = document.getElementById('second_product');
    image.src= "../myWebsite/Pictures/Products/Product2/f2_beige.jpeg";
} 
function changeToBlack2(){
    var image = document.getElementById('second_product');
    image.src= "../myWebsite/Pictures/Products/Product2/f2_black.jpeg";
} 
function changeToBlue2(){
    var image = document.getElementById('second_product');
    image.src= "../myWebsite/Pictures/Products/Product2/f2_blue.jpeg";
} 
function changeToZayte2(){
    var image = document.getElementById('second_product');
    image.src= "../myWebsite/Pictures/Products/Product2/f2_zayte.jpeg";
} 
function changeToJayshe2(){
    var image = document.getElementById('second_product');
    image.src= "../myWebsite/Pictures/Products/Product2/f2_jayshe.jpeg";
} 


/* $(document).ready(function(){
    $(".pro").mouseover(function(){
        $("")
        
    });
});
*/



const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}