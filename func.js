$(document).ready(function(){
    $('#order_img').addClass("hidden");

    $('#order_img').click(function() {
        var $this = $(this);

        if ($this.hasClass("hidden")) {
            $(this).removeClass("hidden").addClass("visible");

        } else {
            $(this).removeClass("visible").addClass("hidden");
        }
    });

    // Insert elements on click of the button
    function reply_click(obj){
        return obj.id;
        
    }

    $("button").click(function(){
        // Creating a div element at the end
        id = this.id
        alert(this.id)
        if($('div#'+ id).length){
            alert("Already added to the cart");
        }else{
            $("form").append('<div id="'+id+'" class="groc-order"><label for="'+id+'">'+id+'</label><input type="number" name="'+id+'" value="1"></div>');
        }
    });
});