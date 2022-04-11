function CodelandUsernameValidation(str) { 

  // code goes here  
  let regex = /[^A-Za-z0-9]+/
  let limit =/^.{4,25}$/
  let character = str.charAt(str.length-1)
  let letters= /^[a-zA-Z]+$/g
  if (regex.test(str) && limit.test(str) && character!="_" && letters.test(str.charAt(0))){
    return true
  }else {
    return false;
  }

}
   