let words ="madam"
let revr=""
for(i=words.length;i>=0;i--)
{
  revr=revr + words.charAt(i)
}console.log(revr)
if(words === revr){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
