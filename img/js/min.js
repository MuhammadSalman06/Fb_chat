jQuery(document).ready(function() {

    $(".chat-list a").click(function() {
        $(".chatbox").addClass('showbox');
        $('#azhan').hide();
        return false;
    });
    
    $(".chat-icon").click(function() {
        $(".chatbox").removeClass('showbox');
    });
    
    $('.chat2').click(function(){
      $('#rayan').show();
      $('#qadeer').hide();
    });
    $('.chat').click(function(){
      $('#qadeer').show();
      $('#rayan').hide();
    });
    
    
    });
    
    $('.snd_msg').click(function(){
      var new_msg = $(this).prev().val();
      $(this).prev().val('');
      // <li class="repaly"><p>msg________test</p><span class="time">junt now</span></li>
      $('.msg-body ul').append('<li class="repaly"><p>'+new_msg+'</p><span class="time">junt now</span></li>');
    });
    

    
    
   
        $(".searching").keyup(function () {
        var searchName = $(this).val().toLowerCase();
        $(".chat_name").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchName) > -1);
        });
    });
   