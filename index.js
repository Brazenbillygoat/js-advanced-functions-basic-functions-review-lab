function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = "*") {
  return function(wish = "special") {
    return `You are ${flair}${wish}${flair}!`
  }
}


let Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}


function actionApplyer(num, arr) {
  let answer = num
  arr.forEach((fn) => {
    answer = fn(answer)
  })
  return answer
}

