
let data = [1,2,3,4,5,6,7,8,9,0]

let btn = document.getElementById('lol')
let color = document.querySelector('.passw')

btn.addEventListener('click', function(){
    
    let RandomNumber = ''
    for(let i=0;i<8;i++){
        RandomNumber += data[getRandom()];
    }
    
    btn.textContent = RandomNumber;
    

})



function getRandom(){
    return Math.floor(Math.random()*data.length);
}
getRandom()