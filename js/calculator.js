function pow() {

    var txt = Math.pow(document.getElementById('txt').value,2);

    document.getElementById('txt').value = txt;

}

function sqrt(){

    var txt = Math.sqrt(document.getElementById('txt').value);

    document.getElementById('txt').value = txt;

}

function delet(){

    var val =  document.getElementById('txt');

    val.value = val.value.substring(0,val.value.length - 1);

}