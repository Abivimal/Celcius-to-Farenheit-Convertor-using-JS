function convert(){
  const celcius=(document.getElementById("input").value)
const farenheit=(celcius*9/5)+32
const result=document.getElementById("result")
  
result.innerHTML=`${farenheit} farenheit`
}