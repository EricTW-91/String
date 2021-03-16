// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

const stringLib = () => {

    function concatanate(a,b){
        // append one string to another
        return a+b;
    }


    function ASCIINumberToChar(Number){
        // take one number, say, 127 and convert it to its ASCII char representation
        return String.fromCharCode(Number);
    }

    function CharToAsciiNumber(aChar){
        // take one Character, say, 'A' and convert it to it's Number representation
        return aChar.charCodeAt();
    }

    function ReverseString(origionalString){
        // return a string, ie: Hello becomes olleH
        let arr = origionalString.split('');
        return arr.reverse().join();
    }

    function GenerateOnlyUpperCase(){
        //Ie: A,B,C,D,E,F,G...Z
        let resultArr = [];
        for(i=65; i<=90; i++){
            resultArr.push(String.fromCharCode(i));
        }
        return resultArr;
    }

    function GenerateOnlyLowerCase(){
        //Ie: a,b,c,d,e,f,g...z
        let resultArr = [];
        for(i=97; i<=122; i++){
            resultArr.push(String.fromCharCode(i));
        }
        return resultArr;
    }

    function GenerateOnlyNumbers(){
        //Ie: 0,1,2,3...9
        let resultArr = [];
        for(i=48; i<=59; i++){
            resultArr.push(String.fromCharCode(i));
        }
        return resultArr;
    }

    function GenerateOnlySymbols(){
        //Ie: $, %, !, #, etc
        let resultArr = [];
        for(i=33; i<=47; i++){
            resultArr.push(String.fromCharCode(i));
        }
        for(i=58; i<=64; i++){
            resultArr.push(String.fromCharCode(i));
        }
        for(i=91; i<=96; i++){
            resultArr.push(String.fromCharCode(i));
        }
        for(i=123; i<=126; i++){
            resultArr.push(String.fromCharCode(i));
        }

        return resultArr;
    }


    function GenerateUpperAndLowerCase(){
        // Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        let resultArr = [];
        let start = 65;
        let end = 90;
        for(i=0; i<2; i++){
            for(j=start; j<=end; j++){
                resultArr.push(String.fromCharCode(j))
            }
            start = 97;
            end = 122;
        }
        return resultArr;
    }

}