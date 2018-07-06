function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
}

$(document).ready(function(){
    $('#ppi').change(function () {
        ppi = $(this).val();
        calculateSens();
    });

    $('#textInput').change(function () {
        winsens = $(this).val();
        calculateSens();
    });

    $('#winsens').change(function () {
        winsens = $(this).val();
        calculateSens();
    });

    $('#osusens').change(function () {
        osusens = $(this).val();
        calculateSens();
    });

    $('#width').change(function () {
        winWidth = $(this).val();
        calculateSens();
    });

    $('#height').change(function () {
        winHeight = $(this).val();
        calculateSens();
    });

    var getPlayArea = function () {
        if ((winWidth / winHeight) >= (4.0 / 3)) {
            playHeight = winHeight;
            playWidth = winHeight * (4.0/3);
        } else {
            playWidth = winWidth;
            playHeight = winWidth / (4 / 3);
        }
    };

    var getWinMulti = function (sens) {
        if (sens >= 1 && sens <= 20) {
            var list = [1/32, 1/16, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1.0, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5];
            return list[sens - 1];
        } else {
            return 0;
        }
    };
    var calculateSens = function () {
        getPlayArea();
        effectivePPI = ppi * getWinMulti(winsens) * osusens;
        $('#result').text(effectivePPI);
        $('#playres').text(playWidth + 'x' + playHeight);
        effwidth = Math.round((playWidth / effectivePPI)*100)/100;
        effHeight = Math.round((playHeight / effectivePPI)*100)/100;
        $('#playarea').text(effwidth + '" x ' + effHeight + '"');
        $('#playareacm').text(effwidth * 2.54 + 'cm x ' + effHeight * 2.54 + 'cm');
    };
    var effwidth;
    var effheight;
    var ppi = 800;
    var winsens = 10;
    var osusens = 1;
    var winWidth = 1920;
    var winHeight = 1080;
    var playWidth = 1920;
    var playHeight = 1080;
    calculateSens();
});