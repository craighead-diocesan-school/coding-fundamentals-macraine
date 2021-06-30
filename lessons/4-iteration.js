function lesson4() {

  //create a variable 
  let sum = 0
  let num = -1
  let totalNum = 0
// starts a loop
  while (num != '') {
    num = prompt ('Number:')
    alert('num is' + num)
    num= Number(num)
    alert('num is' + num)
    sum = sum + num 
    totalNum= totalNum +1
  }
  totalNum = totalNum - 1
  alert(sum/totalNum)
   
//outputs blah blah blah
}
