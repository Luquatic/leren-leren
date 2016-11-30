$(document).ready(function () {

    var camera = document.getElementById('camera');

    document.addEventListener("keypress", zweefEven, false);

    function zweefEven(e) {
        var keyCode = e.charCode;
        
        if(keyCode == 32) {
            $(camera).attr('camera', 'userHeight: 10');

            setTimeout(function () {
                $(camera).attr('camera', 'userHeight: 5.6');
            }, 250)
        }
    }
});