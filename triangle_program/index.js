let a;
let b;
let c;

// a = window.prompt('sisi A: ');
// a = Number(a); // mengubah string ke number

// b = window.prompt('sisi B: ');
// b = Number(b); // mengubah string ke number

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c);

document.getElementById('button').onclick = function() {
    a = document.getElementById('aInput').value;
    a = Number(a);

    b = document.getElementById('bInput').value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById('result').innerHTML = 'Nilai sisi C: ' + c;
}

