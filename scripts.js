
(function($) {
    $(document).ready(function () {

        $("button").on("click", function(e){
            e.preventDefault();

            var userInput = $("input").val(),
                newLi = $("<li></li>", {
                    text: userInput
                });
            $("ul").append(newLi);
        });
    });
})(jQuery);