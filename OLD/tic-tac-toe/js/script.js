/*$(function(){
 function game(){
 var cubes = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];
 var html = '';
 for (var i = 0; i < cubes.length; i++){
 var cubesId = 'id="' + cubes[i] + '">';
 html = html + '<div class="leftCube cube" ' + cubesId + '</div><div class="rightCube cube" ' + cubesId + '</div><div class="centerCube cube" ' + cubesId + '</div>';

 //+ '<div class="leftCube cube" id="' + cubes[i] + '"></div>'
 //+ '<div class="rightCube cube" id="' + cubes[i] + '"></div>'
 //+ '<div class="centerCube cube" id="' + cubes[i] + '"></div>';
 }
 $('#center').html(html);
 }
 });*/


$(function(){

    function getRandNumber(){
        var rand = Math.round((Math.random() * 8)) + 1;
        return rand;
    };
    window.getRandNumber = getRandNumber;

    function stroke(){
        var rand = getRandNumber();
        var $randCell = $('.cube:nth-of-type(' + rand + ')');
        if($randCell.hasClass('cross') || $randCell.hasClass('zero')){
            stroke();
        }
        else{
            if (isCross){
                $randCell.addClass('cross');
                isCross = false;
            } else {
                $randCell.addClass('zero');
                isCross = true;
            }
        }
        checkWinner();
    };

    var isCross = true;

    $('.cube').on('click', function(){
        var hasCrossClass = $(this).hasClass('cross'),
            hasZeroClass = $(this).hasClass('zero');

        if (hasCrossClass || hasZeroClass){
            return;
        }

        if (isCross){
            $(this).addClass('cross');
            isCross = false;
        } else {
            $(this).addClass('zero');
            isCross = true;
        }
        checkWinner();
        setTimeout(stroke, 1000);
    });


    $('#button').on('click', function(){
        if ($('.cube').hasClass('cross') || $('.cube').hasClass('zero')){
            removeClasses();
            $('.whiteFlower').toggleClass('redFlower');
            $('#center').css({ visibility: 'visible' });
        }
    });

    function removeClasses() {
        $('.cube').removeClass('cross');
        $('.cube').removeClass('zero');
        $('body').removeClass('winnerCat');
        $('body').removeClass('winnerDog');
        $('.wrapPetal').removeClass('rollingFlower');
        $('.message').css({ display: 'none' });
    }

    function showAnimalScreen (){
        $('.whiteFlower').toggleClass('redFlower');
        $('.wrapPetal').addClass('rollingFlower');
        $('#center').css({ visibility: 'hidden' });
    }

    function showCatScreen (){
        $('body').addClass('winnerCat');
        showAnimalScreen();
    }

    function showDogScreen (){
        $('body').addClass('winnerDog');
        showAnimalScreen();
    }

    function elementsHasClass ($cube1, $cube2, $cube3, cssClass){
        if($cube1.hasClass(cssClass) && $cube2.hasClass(cssClass) && $cube3.hasClass(cssClass)){
            return true;
        } else {
            return false;
        }
    }

    function hasWinLineWithClass (cssClass){
        var hasLine =   elementsHasClass ($('#c1'), $('#c2'), $('#c3'), cssClass) ||
            elementsHasClass ($('#c4'), $('#c5'), $('#c6'), cssClass) ||
            elementsHasClass ($('#c7'), $('#c8'), $('#c9'), cssClass) ||

            elementsHasClass ($('#c1'), $('#c4'), $('#c7'), cssClass) ||
            elementsHasClass ($('#c3'), $('#c6'), $('#c9'), cssClass) ||
            elementsHasClass ($('#c2'), $('#c5'), $('#c8'), cssClass) ||

            elementsHasClass ($('#c1'), $('#c6'), $('#c8'), cssClass) ||
            elementsHasClass ($('#c2'), $('#c6'), $('#c7'), cssClass);
        return hasLine;
    }

    function checkWinner(){
        if (hasWinLineWithClass('cross'))  {
            /*alert('Победил крестик :)'); */
            $('#crossHasWon').css({ display: 'block' });
            showCatScreen();
        }
        else if(hasWinLineWithClass('zero')) {
            //alert('Победил нолик :)');
            $('#knotHasWon').css({ display: 'block' });
            showDogScreen();
        }
    };
});