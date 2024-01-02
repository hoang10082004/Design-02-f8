//  console.log("Tran Duy Hoang pha co gang hoc ")
 //BIEN -VARIABLES
// camelCase -> vi du: tenBien hoac iloveyou-> iLoveYou
//khong ne dat tieng viet cac kis tu dac biet 
// Declare a variable: khai bao bien
// var, let, const(hang so khi khai bao phai co gia tri)
const number = 10;
console.log(number);
let otherNumber = 20;
otherNumber = 30;
console.log(otherNumber);
//  Hoisting : khai bao bien truoc khi su dung
const anotherNumber = true;//Boolean
let otherValue = undefined;//undefined null
let otherString = "Tran Duy Hoang";//String
console.log(otherString);
// Data types: Number, String, Boolean, undefined, null, Object, Array
// var se bi hoisting(nghia la se dua phan khai bao bien len tren cung)
//khi ma khai bao bien ma chua gan gia tri thi tra ve nhu a
var a;//undefined
 ///String 
// double quotes, single quotes, backticks
const name = "Hoang va Quyen";
// console.log(name);
// console.log(typeof name);//kieu du lieu cua bien
const newStr="My name is "+name+ " phai co gang hoc tap";
console.log(newStr);
// ${variable} -> template string
const newStr2=`My name is ${name}
phai co gang hoc tap`;
console.log(newStr2);
// .length
// console.log(name.length);
console.log(name.split(" "));
console.log(name.split(""));
// .toUpperCase() hoa het .toLowerCase() thuong het
console.log(name.toUpperCase());
//startsWith()kiem tra chu dau endsWith() kiem tra chu cuoi
console.log(name.startsWith("Tran"));
console.log(name.endsWith("g"));
//includes() kiem tra chuoi co chua chuoi con khong
console.log(name.includes("quyen"));
//indexOf() tim kiem vi tri cua chuoi con
console.log(name.indexOf("d"));
//lastIndexOf() tim kiem vi tri cua chuoi con cuoi cung
console.log(name.lastIndexOf("a"));
//replace() thay the chuoi con
console.log(name.replace("va","Yeu"));
//repeat() lap lai chuoi con
console.log(name.repeat(2));
//slice() cat chuoi con
console.log(name.slice(0,5));
console.log(name.slice(-5));//lay nguuoc lai    
//trim() cat khoang trang dau va cuoi chuoi
const str="   Hello World   ";
console.log(str.trim());
console.log(str.trimEnd());
//charAt() lay ky tu tai vi tri
console.log(name.charAt(0));
//substr(index:vị trí,length:so luong ki tu muon lay) lay chuoi con tu vi tri (một phần của chuỗi)
console.log(name.substr(0,5));
//substring(start index,end index) lay ra các kí tự
console.log(name.substring(0,5));
///nhiều chức năng trong 1 lần
console.log(
    name
    .trim()
    .replace("va","Yeu")
    .toUpperCase()
    .repeat(2)
)
///Number
console.log(5+7);
console.log(typeof 5);
console.log(typeof 5.5);
const number1="5";
const number2="5.8";
//ep kieu
console.log(parseInt(number1));
console.log(parseFloat(number2));
//ep ve so nguyen Math.abs(value);
const number3=-10;
console.log(Math.abs(number3));
// lam tron xuong Math.floor(value);
const number4=5.5;
console.log(Math.floor(number4));
//lam tron len Math.ceil(value);
console.log(Math.ceil(number4));
//lam tron gan nhat Math.round(value); duoi 5 xuong, tren 5 len
console.log(Math.round(number4));
//rut gon so value.toFixed(...);
console.log(number4.toFixed(2));
//Math.random(); tra ve so ngau nhien tu 0 den 1
console.log(Math.ceil(Math.random())); 
//Math.max(...value); tra ve gia tri lon nhat
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
//Math.min(...value); tra ve gia tri nho nhat
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
//Math.pow(base,exponent); tra ve gia tri cua so mu
console.log(Math.pow(2,3));//2^3
// isNaN(value) ->Not a number
console.log(isNaN("Hello"));//true
console.log(isNaN("666"));//false
// Number.isNaN(value) ->
console.log(Number.isNaN("Hello"));//false
console.log(Number.isNaN(NaN));//true
//Undefined -> khong xac dinh(khai bao bien nhung chua gan gia tri)
let a1;
console.log(a1);//undefined
// NUll -> khong co gia tri(nothing)
let a2=null;
console.log(a2);//null
//Boolean -> true or false
// falsy values: false, 0, "", null, undefined, NaN
// truthy values: true, "0", "false", "null", "undefined", "NaN",100,1000







