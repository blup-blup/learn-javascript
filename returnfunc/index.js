let beratBadan;
let tinggiBadan;

beratBadan = window.prompt('masukan berat badan');
tinggiBadan = window.prompt('masukan tinggi badan');

result = resultBmi(beratBadan, tinggiBadan);

document.getElementById('bmi').innerHTML = 'Bmi skor:'+ result;

function resultBmi(beratBadan, tinggiBadan){
    return beratBadan / (tinggiBadan * tinggiBadan);
} // untuk mengembalikan hasil dari fungsi