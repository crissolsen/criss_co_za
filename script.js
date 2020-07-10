$(".grid-container").hide()

$(".no-space").click(function() {
    $("#navbar").hide();
    exciting();
    $(".grid-container").fadeIn("fast");
})


gsap.from("#navbar", { duration: 1.3, y: '-1000px', opacity: 0, ease: 'bounce'})

function exciting() {
    gsap.from(".grid-item", { duration: 0.6, opacity: 0, stagger: 0.5})
}