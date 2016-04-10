function workfolder() {
    
    $('.thumb').click(function () {
        $('.work-folder').css('left','-100%');
        $('.store').show();
    });
    
    $('.return').click(function(){
        $('.work-folder').css('left', '0%');
        $('.store').hide();
    });

}

function storeload(){
    $.ajaxSetup({ cache: false });
    $('.thumb').click(function(){
        var $this = $(this),
            newTitle = $this.find('.cato').text(),
            newFolder =$this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = 'work/'+ newFolder +'.html';
    $('.store-load').html(spinner).load(newHTML);
    $('.work-title').text(newTitle);
        
    }); 
} 

function clientStuff() {

    $('.client-unit').first().addClass('active-client');
    $('.tm').first().addClass('active-client');
    
    $('.tm').click(function(){
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        
        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
        $('.tm').removeClass('active-client').eq(position).addClass('active-client');
        
    });
    
    
    $('.ctrl-nxt, .ctrl-prv').click(function(){
        
        var $this = $(this),
            curActiveClient = $('.client-belt').find('.active-client'),
            position = $('.client-belt').children().index(curActiveClient),
            clientNum = $('.client-unit').length;
        
            //console.log(curActiveClient, position, clientNum);
            if($this.hasClass('ctrl-nxt')){
                if(position < clientNum-1){
                    //console.log(position, clientNum);
                    $('.active-client').removeClass('active-client').next().addClass('active-client');
                } else {
                      $('.client-unit').removeClass('active-client').first().addClass('active-client');
                      $('.tm').removeClass('active-client').first().addClass('active-client');

                }
            }else{
                
                if(position === 0){
                    $('.client-unit').removeClass('active-client').last().addClass('active-client');
                    $('.tm').removeClass('active-client').last().addClass('active-client');
                    //console.log(position, clientNum);                    
                } else {
                    $('.active-client').removeClass('active-client').prev().addClass('active-client');
                      

                }
                
            }
                
        
    });
}


