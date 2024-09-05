var angka = prompt('masukan nama makanan / menuman : \n (cnth : nasi, daging, susu, hamburger, softdrink');

switch(angka){
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman SEHAT');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default:
        alert('error input');
}