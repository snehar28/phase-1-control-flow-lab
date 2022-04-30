function scuberGreetingForFeet(ridedistance){
  // Write your code here!
  let result;
  if (ridedistance <= 400) {
    result = "This one is on me!";
  } else if (ridedistance>400 && ridedistance<=2000) {
    result = "That will be twenty bucks.";
  } else if (ridedistance>2000 && ridedistance<2500) {
    result ="I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(cityName){
  // Write your code here!
  let result;

  cityName === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");

  return result;
}

function switchOnCharmFromTip(tipamount){
  // Write your code here!
  let result;

  switch (tipamount){
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    default:
      result = "Bye.";
      break;
  }

  return result;
}