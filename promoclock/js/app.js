$(document).ready(function () {

    var count = parseInt($('#num').html());
    var breakTime = parseInt($('#breakNum').html());

    $('#reset').hide();

    $('#start').click(function () {
        var counter = setInterval(timer, 1000)
        count *= 60;

        function timer() {
            //hide varibles
            $('#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2').hide();
            $('#timeType').html("session time");
            count--;

            if (count % 60 >= 10) {
                $('#num').html(Math.floor(count / 60) + ":" + count % 60);
            } else {
                $("#num").html(Math.floor(count / 60) + ":0" + count % 60)
            }

            if (count === 0) {
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
            }W

            //$('#num').html(count);

            function breakTimer() {
                $('#timeType').html("break time:");
                $('#num').hide();
                $('#breakNum').show();
                breakTime--;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    $('#reset').show();
                    $('breakNum').hide();
                }

                if (breakTime % 60 >= 10) {
                    $('#breakNum').html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                } else {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":0" + breakTime % 60)
                }

               // $('#breakNum').html(breakTime);
            }
        }
    });


    $('#minus5Clock').click(function () {
        if (count > 5) {
            count = count - 5;
            $('#num').html(count);
            console.log(count);
        }
    });

    $('#add5Clock').click(function () {
        count += 5;
        $('#num').html(count);
        console.log(count);
    });

    $('#minus5Break').click(function () {
        if (breakTime > 5) {
            breakTime = breakTime - 5;
            $('#breakNum').html(breakTime);
            console.log(breakTime);
        }
    });

    $('#add5Break').click(function () {
        breakTime += 5;
        $('#breakNum').html(breakTime);
        console.log(breakTime);
    });

    $('#reset').click(function () {
        count = 25;
        breakTime = 25;
        $('#num').html(count);
        $('#breakNum').html(breakTime);
        $('#timeType').hide();
        $('#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #num, #breakNum, #title1, #title2').show();
    });

});
