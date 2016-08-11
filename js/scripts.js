$(document).ready(function() {


$(".blanks form").submit(function(event) {
  var side1Inp = parseInt($("input#side1").val());
  var side2Inp = parseInt($("input#side2").val());
  var side3Inp = parseInt($("input#side3").val());

  if (side1Inp === side2Inp && side2Inp===side3Inp) {
    alert("equilateral triangle!")
  } else if (side1Inp!==side2Inp && side1Inp!==side3Inp && side2Inp!==side3Inp) {
    alert("scalene triangle")
  } else {
    alert("isoceles triangle")
  }
  debugger;
  event.preventDefault();
  });
});
