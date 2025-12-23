let names = "mam"
let rev=""
for(i=names.length;i>=0;i--){
  rev=rev+names.charAt(i)
}
console.log(rev)
if(names===rev){
    console.log("It is palindrome")
}else{
    console.log("its is not a palindrome")
}