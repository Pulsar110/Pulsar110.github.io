function append_user_select_buttons(script_idx) {
  var btn = $('<button type="button" class="btn btn-secondary"></button>').text('test');
  $('#user_select').append(btn);
}

function create_reply_item(response_idx) {
    var res = document.createElement('p');
    res.innerHTML = 'test';
    $('#main_script').append(res);
}


$(document).ready(function(){
  append_user_select_buttons(0);
  create_reply_item(0);
});



