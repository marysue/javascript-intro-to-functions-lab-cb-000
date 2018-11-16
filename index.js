function shout (str) {
  //returns string in all caps
  return str.toUpperCase();
}

function whisper (str) {
  //returns string in all lowercase
  return str.toLowerCase();
}

function logShout (str) {
  //Logs in all caps
  console.log(str.toUpperCase());
}

function logWhisper(str)
{
  //logs in all lower case
 console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  //should return "I can't hear you!" if string is lowercase;
  var retVal;

  if (str === str.toLowerCase())
  {
    retVal = 'I can\'t hear you!';
  }
  else if (str === str.toUpperCase() )
  {
    retVal = 'YES INDEED!';
  } else if (str === 'I love you, Grandma.')
  {
    retVal = 'I love you, too.';
  }
  //returns "YES INDEED!" if string is upper case
  // returns "I love you, too." fi string is "I love you, Grandma."
  return retVal;
}
