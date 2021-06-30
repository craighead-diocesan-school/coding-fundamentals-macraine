function lesson5() {
  // variable with the value of 10
  let maxi = prompt ('give a maxium')
maxi = Number(maxi)
  let incr = prompt ('give a incremnet')
  incr = Number (incr)
  let count = 0

// start your loop, and stop it before it gets to 0
  while (count != maxi ) {
    // alert the the number 
    alert(count)
    // minus 1 from the previous number displayed 
  count =  count + incr
  }
  // alert a message of your choice 
  alert('Lift Off!')
}
