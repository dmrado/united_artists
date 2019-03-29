$(function(){
    var keyLogs;
    var output = $('#output');
    $(document).keyup(function (e) {
        keyLogs = e.key;
        output.append('<lo>' +keyLogs+ '</lo>');
    });
});