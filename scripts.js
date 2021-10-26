/********************************

        COOKIE clicker

********************************/
  //defaults
  let cookieCount = 0;
  let clickPower = 1;
  //DOM decleration
  let cookieCounter = document.getElementById('cookie-counter');
  let cookieClicker = document.getElementById('cookie-clicker');


  //everytime a user clicks the button, their cookies are increased by the value of their clickPower.
  cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
  })

  //refresh cookies
  let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
  }
  /********************************

        Click Power

********************************/
  //default variables
  let clickPowerPriceAmount = 50;
  let clickPowerLevelNumber = 1;
  //declare DOM variables
  let buyClickPower = document.getElementById('buy-click-power');
  let clickPowerPrice = document.getElementById('click-power-price');
  let clickPowerLevel = document.getElementById('click-power-level');
  let clickPowerMultiple = document.getElementById('click-power-multiple');
  //Buy click power
  buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
      console.log("Item succesfully Bought");
    } else {
      console.log("You don't have enough cookies!");
    }
  })
  if (cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from the price of the item
  cookieCount -= clickPowerPriceAmount;
  //update cookie counter.
  cookieCounter.innerHTML = cookieCount;
}
//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})
if (cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from the price of the item
  cookieCount -= clickPowerPriceAmount;
  refreshCookieCount()
}
let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}
if (cookieCount >= clickPowerPriceAmount) {

  //Upgrade power level
  clickPowerLevelNumber += 1;

  //Update click price
  clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
  clickPower += 1;


  //refresh shop item
  refreshPowerClick();

}
