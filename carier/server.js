
let bar = document.querySelector('.bar')
let bar1 = document.querySelector('.bar1')
let bar2 = document.querySelector('.bar2')

bar.addEventListener('click', function(){
    let text1 = document.querySelector(".text-container");
    let text3 = document.querySelector(".text3-container");

    let text2 = document.querySelector(".text2-container");

    text3.style.visibility = "hidden";

    text2.style.visibility = "hidden" ;
    text1.style.visibility = "visible";
    bar.style.background = "#E21E4B";
    bar1.style.background = "#B4BDC2";
    bar2.style.background = "#B4BDC2";

})

bar1.addEventListener('click', function(){
    let text2 = document.querySelector(".text2-container");
    let text3 = document.querySelector(".text3-container");

    let text1 = document.querySelector(".text-container");

    text2.style.visibility = "visible" ;
    text1.style.visibility = "hidden";
    text3.style.visibility = "hidden";
    bar.style.background = "#B4BDC2";
    bar2.style.background = "#B4BDC2";
    bar1.style.background = "#E21E4B";
})

bar2.addEventListener('click', function(){
    let text2 = document.querySelector(".text2-container");
    let text3 = document.querySelector(".text3-container");
    let text1 = document.querySelector(".text-container");

    text2.style.visibility = "hidden" ;
    text1.style.visibility = "hidden";
    text3.style.visibility = "visible";
    bar2.style.background = "#E21E4B";
    bar1.style.background = "#B4BDC2";
    bar.style.background = "#B4BDC2";
})