connect to your Firebase application using your reference URL
var orderAppReference = new Firebase("https://morada-delivery-app.firebaseio.com/");
var quesadillasquantity = 1;
var total;


$(document).ready(function(){

$('#add').on('click', function(){
  if (quesadillasquantity <10){
  quesadillasquantity = quesadillasquantity +1;
  $('#quantity').text(quesadillasquantity);
  $('#calculatedPrice').text(7*quesadillasquantity);
var newOrder= $("#order1").clone();
newOrder.attr("id","order"+quesadillasquantity)
newOrder.find('.tortilla-flour').attr("name","quesadillaOrder"+quesadillasquantity)
newOrder.find('.tortilla-corn').attr("name","quesadillaOrder"+quesadillasquantity)
  $("#totalPrice").before(newOrder);
  }

})

$('#subtract').on('click', function(){
 if (quesadillasquantity >1){
   $("#order"+quesadillasquantity).remove();
   quesadillasquantity = quesadillasquantity -1;
 $("#quantity").text(quesadillasquantity);
 $('#calculatedPrice').text(7*quesadillasquantity);
}
})

  $('.quesadillaMenu').on("submit",function (event) {
    console.log("huh")

    event.preventDefault()
var orders=[];
for(var i=1;i<=quesadillasquantity;i++){
  var order=$("#order"+i)
  var $orderflour = order.find('.tortilla-flour').is(":checked");
  var $ordercorn = order.find('.tortilla-corn').is(":checked");
  var $ordersteak = order.find('.steak').is(":checked");
  var $orderpork = order.find('.pork').is(":checked");
  console.log($orderpork)
  var $orderenchilada = order.find('.enchilada').is(":checked");
  var $orderchorizo = order.find('.chorizo').is(":checked");
  var $ordervegetables = order.find('.vegetables').is(":checked");
  var $orderhongos = order.find('.hongos').is(":checked");
  var $ordercecina = order.find('.cecina').is(":checked");
  var $orderchicken = order.find('.chicken').is(":checked");
    var $orderalpastor = order.find('.alpastor').is(":checked");
orders.push({intakePork:$orderpork,
intakeFlour:$orderflour,
intakeCorn:$ordercorn,
intakepork:$orderpork,
intakeSteak:$ordersteak,
intakeChorizo:$orderchorizo,
intakeVegetables:$ordervegetables,
intakeHongos:$orderhongos,
intakeEnchilada:$orderenchilada,
intakeCecina:$ordercecina,
intakeChicken: $orderchicken,
intakeAlpastor:$orderalpastor,
})
}
console.log(orders)

      var orderReference = orderAppReference.child('intakes');
            use the set method to save data to the messages
      orderReference.push(orders)
    })
  })

  /******************************************
  /* burritos
  /*******************************************/
  //
  // var orderAppReference = new Firebase("https://morada-delivery-app.firebaseio.com/");
  // var burritosquantity = 1;
  // var total;
  // $(document).ready(function(){
  //
  // $('#addb').on('click', function(){
  //   if (burritosquantity <10){
  //   burritosquantity = burritosquantity +1;
  //   $('#quantityb').text(burritosquantity);
  //   $('#calculatedPriceb').text(8*burritosquantity);
  // var newOrderB= $("#order1B").clone();
  // newOrder.attr("id","order"+burritosquantity)
  // newOrder.find('.tortilla-flour').attr("name","quesadillaOrder"+quesadillasquantity)
  // newOrder.find('.tortilla-corn').attr("name","quesadillaOrder"+quesadillasquantity)
  //   $("#totalPriceb").before(newOrderB);
  //   }
  //
  // })
  //
  // $('#subtractb').on('click', function(){
  //  if (burritosquantity >1){
  //    $("#order"+burritosquantity).remove();
  //    burritosquantity = burritosquantity -1;
  //  $("#quantityb").text(burritosquantity);
  //  $('#calculatedPriceb').text(8*burritosquantity);
  // }
  // })
  //
  //   $('.burritosMenu').on("submitb",function (event) {
  //     console.log("huh")
  //
  //     event.preventDefault()
  // var orders=[];
  // for(var i=1;i<=burritosquantity;i++){
  //   var order=$("#order"+i)
  //   var $orderflour = order.find('.tortilla-flour').is(":checked");
  //   var $ordercorn = order.find('.tortilla-corn').is(":checked");
  //   var $burritoSteak = order.find('.steakb').is(":checked");
  //   var $burritoPork = order.find('.porkb').is(":checked");
  //   console.log($orderpork)
  //   var $burritoEnchilada = order.find('.enchiladab').is(":checked");
  //   var $burritoChorizo = order.find('.chorizob').is(":checked");
  //   var $burritoVegetables = order.find('.vegetablesb').is(":checked");
  //   var $burritoHongos = order.find('.hongosb').is(":checked");
  //   var $burritoCecina = order.find('.cecinab').is(":checked");
  //   var $burritoChicken = order.find('.chickenb').is(":checked");
  //     var $burritoAlpastor = order.find('.alpastorb').is(":checked");
  //
  // orders.push({
  //   intakePork:$orderpork,
  // intakeFlour:$orderflour,
  // // intakeCorn:$ordercorn,
  // BurritoPork:$orderpork,
  // BurritoSteak:$ordersteak,
  // BurritoChorizo:$orderchorizo,
  // BurritoVegetables:$ordervegetables,
  // BurritoHongos:$orderhongos,
  // BurritoEnchilada:$orderenchilada,
  // BurritoCecina:$ordercecina,
  // BurritoChicken: $orderchicken,
  // BurritosAlpastor:$orderalpastor,
  // })
  // }
  // console.log(orders)
