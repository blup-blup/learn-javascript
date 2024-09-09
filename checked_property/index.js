document.getElementById('submitBtn').onclick = function() {
    const checkbox = document.getElementById('check');
    const bri = document.getElementById('bri');
    const bni = document.getElementById('bni');
    const bsi = document.getElementById('bsi');

    if(checkbox.checked){
        console.log('yeah!');
    } else {
        console.log('Nooooo....');
    }

    if(bri.checked){
        console.log('Kamu pilih BRI');
    } else if(bni.checked){
        console.log('Kamu pilih BNI');
    } else if(bsi.checked){
        console.log('Kamu pilih BSI');
    } else {
        console.log('kamu harus memasukan payment');
    }
}