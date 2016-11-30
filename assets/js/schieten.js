$(document).ready(function () {

    var kogel  = document.getElementById('kogel'),
        camera = document.getElementById('camera');
    
    document.addEventListener("keypress", schiet, false);
    
    function schiet(e) {
        var keyCode = e.charCode;

        if(keyCode == 46) { 
            $(kogel).attr('visible', 'true');
            $(kogel).append('<a-animation attribute="position" dur="5000" fill="forwards" to="-0.45 -1 -50"></a-animation>');

            setTimeout(function() {
                $(kogel).attr('visible', 'false');
            }, 5000)
        }

        console.log(keyCode)
    }
    
});