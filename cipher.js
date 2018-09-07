function rot13(str) { // LBH QVQ VG!
  var num;
  var newstr="";
  var decoded="";
  for (i=0;i<str.length ;i++){
    num= str.charCodeAt(i);
 // num = num-13; a=65 Z=90
    if (num>77 && num <91){
  decoded += String.fromCharCode(num-13);
    //decoded += newstr;
    }
    else if (num>64 && num <78){
  decoded += String.fromCharCode(num+13);
    //decoded += newstr;
    }
    else {
        decoded += String.fromCharCode(num);

    }  
  }
  return decoded;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
//rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
