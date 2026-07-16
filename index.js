const answer = document.getElementById("answer")

function fibonacci() {
  const number = document.getElementById("number").value
 let a = 0
 let b = 1
 let temp = undefined
  
  for (var i = 0; i < number; i++) {
    temp = a + b
    a = b
    b = temp
  }
  let tempAnswer = a
  answer.textContent = a
  
}

