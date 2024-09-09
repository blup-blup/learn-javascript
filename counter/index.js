let count = 0;

document.getElementById('kurang').onclick = function() {
    count -=1;
    document.getElementById('counterLabel').innerHTML = count;
}

document.getElementById('reset').onclick = function() {
    count = 0;
    document.getElementById('counterLabel').innerHTML = count;
}

document.getElementById('tambah').onclick = function() {
    count +=1;
    document.getElementById('counterLabel').innerHTML = count;
}