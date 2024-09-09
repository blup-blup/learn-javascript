let x;
let y;
let z;

document.getElementById('button').onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1; // random number 1-6

    document.getElementById('xlabel').innerHTML = 'x:'+ x;
    document.getElementById('ylabel').innerHTML = 'y:'+ y;
    document.getElementById('zlabel').innerHTML = 'z:'+ z;
}