let temp = -5;
let cuaca = true;

if(temp <= 30 && cuaca){
    console.log('Cuacanya bagus!')
} else {
    console.log('Cuacanya buruk')
}

// logical || 'atau' akan di eksekusi jika ada salah satu varibel true
// logical && 'and' akan di eksekusi jika semua variabelnya true 

if(!(temp > 0)){
    console.log('cuaca normal');
} else {
    console.log('cuaca tidak normal');
}

// logical ! 'not' akan membalikan nilai yang awalnya true menjadi false / sebaliknya