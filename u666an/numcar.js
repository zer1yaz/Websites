
let word = ['a','s','d','z','x','c','q','w','e']
let numbers = [1,2,3,4,5,6,7,8,9,0]

let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn.addEventListener('click', function(){

    document.getElementById('btn').innerHTML = 777;

});

btn1.addEventListener('click', function(){
    
    document.getElementById('btn1').innerHTML = 178;

});

btn2.addEventListener('click', function(){
    
    document.getElementById('btn2').innerHTML = 39;

});

let btn4 = document.getElementById('url')

btn4.addEventListener('click',function(){

    let num = '';
    for(let i=0;i<3;i++){
        num += numbers[getRandomNumber()]
    }
    btn4.textContent = num;
})

function getRandomNumber(){
    return Math.floor(Math.random()*numbers.length)
}

let wordbtn = document.getElementById('first')

wordbtn.addEventListener('click',function(){

    let words = '';
    for(let i=0;i<1;i++){
        words += word[getRandomWord()]
    }
    wordbtn.textContent = words;
});

function getRandomWord(){
    return Math.floor(Math.random()*word.length)
};

let wordbtn1 = document.getElementById('second')

wordbtn1.addEventListener('click',function(){

    let words = '';
    for(let i=0;i<2;i++){
        words += word[getRandomWord()]
    }
    wordbtn1.textContent = words;
});