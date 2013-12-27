var size = "10.5";
var amount = 1;
var flag = 0;

function addToCart() {
  var sizesList=document.getElementsByName("skuAndSize")[0];

  function setQuantity() {
    document.getElementsByName("qty")[0].selectedIndex = amount-1;
  }

  function setSizeValue() {
    for (var i=0; i<sizesList.length; i++){
      if(sizesList.options[i].text == size) {
        if(sizesList.options[i].className != "exp-pdp-size-not-in-stock"){
          document.getElementsByName("skuAndSize")[0].selectedIndex = i;
          setQuantity();
        }else{
          console.log('size not availble')
          return 1;
        }
      }
    }
    return 0;
  }

  if(sizesList != undefined) {
    val = setSizeValue();
    if(val == 0){
      document.getElementsByClassName("add-to-cart")[0].click();
      flag = 1;
    }else{
      console.log('size not availble, refresh page');
      window.location.reload();
    }
  }else {
    console.log('purchase not availble, refresh page');
    window.location.reload();
  }
}

var myChecker = setInterval(function () {
  if (flag) {
    clearInterval(myChecker);
  } else {
    addToCart();
  }
}, 500);
