$(document).ready(function(){
    $("#myimage").imagezoomsl({
        zoomrange: [1,12],
        zoomstart: 4,
        innerzoom:true,
        magnifierborder:'none',
    });
    $('.thumb').click(function(){
        var vm = this;
        $('#myimage').fadeOut(600, function(){
            $(this).attr("src", $(vm).attr("src")).fadeIn(1000);
        });
			return false;
        });
});