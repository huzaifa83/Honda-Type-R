$(document).ready(function(){

    $('#defaultvid').prop('volume', 0.2);
    $('#exposevid').prop('volume', 0.2);

    $(document).on('keydown', function (e) {
        if(e.keyCode === 82){
            $('#defaultcont').css('top', -2000 + 'px');
            $('#defaultvid').prop('muted', true);
            $('#exposevid').prop('muted', false);
        }
    });

    $(document).on('keyup', function(e){
        if(e.keyCode === 82){
            $('#defaultcont').css('top', 0 + 'px');
            $('#defaultvid').prop('muted', false);
            $('#exposevid').prop('muted', true);
        }
    });

    $('video').on('pause', function() {
        for(var i = 0; i < 2; i++){
            $('video').get(i).pause();
        }
    });

    $('video').on('play', function() {
        for(var i = 0; i < 2; i++){
            $('video').get(i).play();
        }
    });
});