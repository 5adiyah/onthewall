$(document).ready(function(){
  $(".userinput #formid").submit(function(event){
  var number = parseInt($("input#mynum").val());

    if(number === 0){
      alert("Please Enter a Number larger than 1")
    }

    else {
      $(".userinput").hide();
      $(".numequals1").hide();
      $(".numlargerthan1").show();

      var a = number - 1;

      // $('p.2').prepend("1 bottle of coke on the wall, 1 bottle of coke. Take it down, pass it around no more bottles of coke on the wall! <br>");

        for(var i = 1; i < number; ++i){
          var b = i-1;
          if(i > 1){
            $('p.2').prepend(i + " bottles of coke on the wall, " + i +  " bottles of coke. Take it down, pass it around " + b +" more bottles of coke on the wall! <br>");
          }else if(i===1){
            $('p.2').prepend("1 bottle of coke on the wall, 1 bottle of coke. Take it down, pass it around no more bottles of coke on the wall! <br>");
          }

        };

      $('p.2').prepend(number + " bottles of coke on the wall, " + number +  " bottles of coke. Take it down, pass it around " + a + " more bottles of coke on the wall! <br>");
    };


    event.preventDefault();
  });
});
