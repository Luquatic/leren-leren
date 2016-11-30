$(document).ready(function () {

    var camera = document.getElementById('camera');

    document.addEventListener("keydown", buk, false);
    document.addEventListener("keyup", sta, false);

    function buk(e) {
        var keyCode = e.charCode;

        if(keyCode == 67) {
            $(camera).attr('camera', 'userHeight: 2.8')
        }
    }

    function sta(e) {
        var keyCode = e.keyCode;

        if (keyCode == 67) {
            $(camera).attr('camera', 'userHeight: 5.6')
        }
    }

});