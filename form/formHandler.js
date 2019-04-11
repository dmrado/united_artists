var inputName = $('#inputName');
//метод используется вместо placeholder возможно только для форм
requestEl.focus(function () {
    var field = $(this);
    if(field.val() === field.prop('defaultValue')){
        field.val = '';
    }
});
