var dropDown = '<li class="dropdown pull-right">' +
 '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Environment <span class="caret"></span></a>' +
 '<ul class="dropdown-menu">' +
  '<li><a href="#">Production</a></li>' +
  '<li><a href="#">Staging</a></li></ul></li>';

var dropdownValue = 'Production';

$(document).ready(function(){

    $('.nav-tabs').append(dropDown);
    $('.nav-tabs > li:first-child').addClass('active');
    $('#COREPROD').addClass('active');

    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        if(dropdownValue != selText){
            dropdownValue = selText;
            $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
            $('.tab-pane.active').attr('class', 'tab-pane');
            var text = $('.active > a').text();
            if(dropdownValue == 'Production'){
                $("a[data-toggle='tab']").each(function(){
                    var id = $(this).attr("href");
                    id = id.substring(0, id.length - 7);
                    id += "PROD";
                    $(this).attr("href", id);
                });
                text = '#' + text + 'PROD';
                $(text).addClass('active');
            }
            else{
                $('a[data-toggle="tab"]').each(function(){
                    var id = $(this).attr("href");
                    id = id.substring(0, id.length - 4);
                    id += "STAGING";
                    $(this).attr("href", id);
                });
                text = '#' + text + 'STAGING';
                $(text).addClass('active');
            }
            
        }
    });

    

});