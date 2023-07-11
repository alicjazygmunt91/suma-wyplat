$(document).ready(function(){
    $("#count-sum").click(function(){
      var sum = 0;
      $(".salary").each(function(){
        sum += parseInt($(this).text());
      });
      $("#sum").text(sum);
      $("#sum").animate({fontSize: "30px"}, "slow");
      $("#sum").text("21760 PLN");
    });
  });