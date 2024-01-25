$(document).ready(function(){
  $('body').append('hahahha~');

  $.fn.create_user_item = function(user_response) {
    var res = $('<p class="user_response"></p>').text(user_response);
    $('#main_script').append(res);
  }

  $.fn.create_context_item = function(context) {
    context.each(function(idx, c){
      $('body').append('hahahha~');
      c.each(function(res_type, response){
        $('body').append(res_type);
        var res = $('<p></p>').text(response);
        res.addClass(res_type);
        $('#main_script').append(res);
      });
    });
  }

  $.fn.append_user_select_buttons = function(json_data, script_idx) {
    $('#user_select').empty();
    // $('textarea').html(json_data[script_idx]['user']["1"]);
    json_data[script_idx]['user'].each(function(script_subidx, script_text){ 
      $.each(script_text, function(short_res, long_res){ 
        var btn = $('<button type="button" class="btn btn-secondary"></button>');
        btn.html(short_res);
        btn.on('click', function(){
          $('#user_input').html(long_res);
          // create_reply_item(json_data[script_subidx]);
          // $.fn.append_user_select_buttons(json_data, script_subidx);
        });
        $('#user_select').append(btn);
      });
    });
  }

  $.getJSON('scripts/0.json', function(json_data) {
    $('body').append('hahahha~');
    $.fn.create_content_item(json_data["0"]["context"]);
    $.fn.append_user_select_buttons(json_data, "0");
  });
});



