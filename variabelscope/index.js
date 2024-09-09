function func1(){
    let x = 1; // ini lokal variabel karna hanya bisa di akses oleh fungsi yang mengurungnya
    console.log(x); 
}

let y = 5; // ini global valiabel karna tidak terikat oleh fungsi lain
function func2(){
    console.log(y);
}