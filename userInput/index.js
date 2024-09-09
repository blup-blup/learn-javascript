let userName;

document.getElementById('myButton').onclick = function() {
    userName = document.getElementById('myText').value;
    console.log(userName);
    document.getElementById('myLabel').innerHTML = 'hello' + userName; 
}

/* 
MENGUBAH TULISAN DI HTML DAN MEMBUAT USER INPUT YANG BISA 
INTERACT DENGAN JAVASCRIPT
*/