$(".cross").hide();
$(".menu").hide();

$(".hamburger").click(function() {
  $(".menu").slideDown("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideUp("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});
