$("#all").on("click", function () {
    $(".all").fadeIn("slow");


})

$("#favorites").on("click", function () {
    $(".all").fadeOut("slow");
    setTimeout(() => {
        $(".favorite").fadeIn("slow");    
    }, 500);
})

$("#clients").on("click", function () {
    $(".all").fadeOut("slow");
    setTimeout(() => {
        $(".client").fadeIn("slow");    
    }, 500);
    
})

$("#school").on("click", function () {
    $(".all").fadeOut("slow");
    setTimeout(() => {
        $(".school").fadeIn("slow");    
    }, 500);
})