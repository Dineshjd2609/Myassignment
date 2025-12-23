let data=["chrome",true,132.8]
data[5]="webkit"
console.log(data)
data.pop()
console.log(data)
data.push("fireox")
console.log(data)
data.shift()
console.log(data)
data.sort()
for( val of data){
    console.log(val)
}