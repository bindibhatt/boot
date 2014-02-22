function loading(){
     $('#submit').on('click', function() {
    var $this = $(this);
    $this.button('loading');
    setTimeout(function() {
        $this.button('reset');
    }, 2000);
});
}
 $(document).ready(function(){
    
 loading();
});
$(document).ready(function(){
$('#cancle').click(function(){
$('#username').val('').focus();
$('#password').val('');
});
});
$(document).ready(function() {        
    
    //Execute the slideShow
    slideShow();
});
function slideShow() {
    //Set the opacity of all images to 0
    $('#gallery a').css({opacity: 0.0});
    
    //Get the first image and display it (set it to full opacity)
    $('#gallery a:first').css({opacity: 1.0});
    
    //Set the caption background to semi-transparent
    $('#gallery .caption').css({opacity: 0.7});
    //Resize the width of the caption according to the image width
    $('#gallery .caption').css({width: $('#gallery a').find('img').css('width')});
    
    //Get the caption of the first image from REL attribute and display it
    $('#gallery .content').html($('#gallery a:first').find('img').attr('rel'))
    .animate({opacity: 0.7}, 400);
    
    //Call the gallery function to run the slideshow, 6000 = change to next image after 6 seconds
    setInterval('gallery()',6000);
    
}
function gallery() {
    
    //if no IMGs have the show class, grab the first image
    var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
    //Get next image, if it reached the end of the slideshow, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));    
    
    //Get next image caption
    var caption = next.find('img').attr('rel');    
    
    //Set the fade in effect for the next image, show class has higher z-index
    next.css({opacity: 0.0})
    .addClass('show')
    .animate({opacity: 1.0}, 1000);
    //Hide the current image
    current.animate({opacity: 0.0}, 1000)
    .removeClass('show');
    
    //Set the opacity to 0 and height to 1px
    $('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });    
    
    //Animate the caption, opacity to 0.7 and heigth to 100px, a slide up effect
    $('#gallery .caption').animate({opacity: 0.7},100 ).animate({height: '100px'},500 );
    
    //Display the content
    $('#gallery .content').html(caption);
        
}



$(document).ready(function() {
    var activeSystemClass = $('.list-group-item.active');

    //something is entered in search form
    $('#system-search').keyup( function() {
       var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-condensed tbody');
        var tableRowsClass = $('.table-condensed tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {
        
            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();
                
            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
});