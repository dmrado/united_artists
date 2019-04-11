var requestEl = $('#request');
var searchEl = $('#search');
var output = $('#output');

searchEl.click(function () {
    var request = requestEl.val();

    if(request ===""){
        alert("Все же введите свой запрос.");
        return false;//cnh 254 "JS и jQ"
    }
    //var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+request+"&limit=10&format=json";
    $.ajax({
        url:'proxy.php?request='+request,
        method: 'get',
        dataType: 'json',
        success: function(data){
            console.log(data);
            data[1].forEach(function (value, i) {// i содержит порядковый индекс елемента во всех списках? в данном случае берем из первого списка
                var divEl = $('<div>');
                var aEl = $('<a>');
                var describeEl = $('<p>');
                describeEl.append(data[2][i]);
                aEl.attr('href', data[3][i]);
                aEl.attr('target', '_blank');
                aEl.append(value);
                divEl.append(aEl);
                divEl.append(describeEl);
                output.append(divEl);
            });//end forEach
        }//ens success
    });//end ajax
});

