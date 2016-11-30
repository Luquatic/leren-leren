$(document).ready(function () {

    var kogel  = document.getElementById('kogel'),
        camera = document.getElementById('camera');
    
    document.addEventListener("keypress", schiet, false);
    
    function schiet(e) {
        var keyCode = e.charCode;

        if(keyCode == 46) { 
            $(kogel).attr('visible', 'true');
        }

        console.log(keyCode)
    }
    
});