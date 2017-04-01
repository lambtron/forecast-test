$(function() {
    calculateTimeLeft();

    function calculateTimeLeft() {
        var days = 24 * 60 * 60,
            hours = 60 * 60,
            minutes = 60;

        var EndDate = new Date(2017, 3, 15);
        var StartDate = new Date();
        // console.log(StartDate);
        // console.log(EndDate);

        var timeBetweenS = (EndDate.getTime() - StartDate.getTime()) / 1000;
        // console.log(timeBetweenS);

        // How many days left
        var timeBetweenDays = Math.floor(timeBetweenS / (days));
        // How much time after we subtract the days
        var leftOver = timeBetweenS % days;
        // How many hours left after days
        var timeBetweenHours = Math.floor(leftOver / (hours));
        // How much time after we subtract the hours
        leftOver = leftOver % hours

        var timeBetweenMinutes = Math.floor(leftOver / (minutes));
        leftOver = leftOver % minutes
        var timeBetweenSeconds = Math.floor(leftOver);


        // console.log(timeBetweenDays);
        // // console.log(leftOver);
        // console.log(timeBetweenHours);
        // console.log(timeBetweenMinutes);
        // console.log(timeBetweenSeconds);

        var timeLeft = {
            days: timeBetweenDays,
            hours: timeBetweenHours,
            minutes: timeBetweenMinutes,
            seconds: timeBetweenSeconds
        }

        $(".days .timer").html(timeLeft.days);
        $(".hours .timer").html(timeLeft.hours);
        $(".minutes .timer").html(timeLeft.minutes);
        $(".seconds .timer").html(timeLeft.seconds);

        setTimeout(calculateTimeLeft, 1000);
    }

})
