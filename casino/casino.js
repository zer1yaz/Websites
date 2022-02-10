
let variables = [1,2,3,4,5,6,7,8,9,0];

let btn = document.getElementById('play')

btn.addEventListener('click', function(){

    let num = '';
    for(let i=0;i<1;i++){
        num += variables[getRandom()];
    };

    let n = btn.textContent
    btn.textContent = num;

    if(n==7){
        btn.textContent = 'You win'
    }

})

function getRandom(){
    return Math.floor(Math.random()*variables.length)
};