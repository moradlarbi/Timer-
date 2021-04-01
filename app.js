
function getDate(){
    const tab = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = $('#datepicker').val();
    var month = tab[parseInt(date.toString().substring(5,7),10)-1];
    var day = date.toString().substring(8,10);
    var year = date.toString().substring(0,4);
    var res = day +' '+ month +' '+ year;
    return res;
}
function calculTime(){
    var date = getDate() ;
    var dateWanted = new Date(date);
    var currentDate = new Date();
    var totalSeconds = (dateWanted - currentDate) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24)  ;
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;
    var da = document.getElementById('day').innerHTML = days;
    var ho = document.getElementById('hour').innerHTML = hours;
    var mi = document.getElementById('minute').innerHTML = minutes;
    var sa = document.getElementById('second').innerHTML = seconds;
    console.log(1);
}
var date_input = document.getElementById('datepicker');
date_input.onchange = function(){
    setInterval(calculTime,1000);
}

