$(document).ready(function(){
  $('body').append('hahahha~');

  $.fn.create_reply_item = function(script_entry) {
    var res = $('<p></p>').text(script_entry['ai']);
    $('#main_script').append(res);
  }

  $.fn.append_user_select_buttons = function(json_data, script_idx) {
    $('#user_select').empty();
    $('textarea').html(json_data[script_idx]['user']["1"]);
    $.each(json_data[script_idx]['user'], function(script_subidx, script_text){ 
      var btn = $('<button type="button" class="btn btn-secondary"></button>');
      btn.html(script_text);
      btn.on('click', function(){
        create_reply_item(json_data[script_subidx]);
        $.fn.append_user_select_buttons(json_data, script_subidx);
      });
      $('#user_select').append(btn);
    });
  }

  $.getJSON('scripts/0.json', function(json_data) {
    $('body').append('hahahha~');
    $.fn.create_reply_item(json_data["0"]);
    $.fn.append_user_select_buttons(json_data, "0");
  });
});



