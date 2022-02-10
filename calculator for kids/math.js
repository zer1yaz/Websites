
let numb = [1,2,3,4,5,6,7,8,9,0]
let value = ['+',"-",'*',"/"]

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let n = first.addEventListener('click', function(){

    let a = ''
    for(let i=0;i<1;i++){
        a += numb[getRandom()]
    }

    first.textContent = a
})

let n1 = third.addEventListener('click', function(){

    let b = ''
    for(let i=0;i<1;i++){
        b += numb[getRandom()]
    }

    third.textContent = b
})

second.addEventListener('click', function(){

    let c = ''
    for(let i=0;i<1;i++){
        c += value[getValue()]
    }

    second.textContent = c
})

function getRandom(){
    return Math.floor(Math.random()*numb.length)
}

function getValue(){
    return Math.floor(Math.random()*value.length)
}

let c = document.getElementById('fours')

c.addEventListener('click', function(){
    
    let first = document.getElementById('first').innerHTML;
    let second = document.getElementById('third').innerHTML;
    let third = document.getElementById('second').innerHTML;
    

    let answer = Number(first)+Number(second);
    c.textContent = answer;


})
