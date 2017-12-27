function isPalindrome(str){

    var newStr = str.replace(/[\s,.:;!?]/g, "").toLowerCase();

    for(var i=0; i<newStr.length/2; i++){
        if(newStr.charAt(i)!=newStr.charAt(newStr.length-i-1)){
            return false;
        }
    }
    return true;
}

var phrase=prompt("Введите строку: ");

if(isPalindrome(phrase))
    alert("Строка является палиндромом.");
else alert("Строка не является палиндромом.");


