//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");

    $('.button').click(function () {
        window.location.href = 'profile.html';
        return false;
    });

});